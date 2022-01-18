function Load () {
    this.loadBar = null;
    this.playButton = null;
    this.background = null;
    this.failed = false;
}

Load.shouldLoadAudio = function () {
    try {
        return localStorage.getItem("ShapeClear_disableAudio") !== "true";
    } catch (e) {
        return true;
    }
};

Load.prototype.preload = function () {
    var r = Phaser.VERSION.startsWith("2.6.") ? this.game.resolution : 1.0;
    game.canvas.oncontextmenu = function (e) {
        e.preventDefault();
    };
    if (/Android 2\./.test(navigator.userAgent)) {
        this.game.device.m4a = false;
    }
    this.loadBar = this.add.text(this.game.width / 2, this.game.height / 2, 'Loading assets...');
    this.loadBar.x -= this.loadBar.width / (2 * r);
    this.loadBar.y -= this.loadBar.height / (2 * r);
    this.testRenderer();

    // some game settings
    game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    game.scale.onResize = function () {
        var rect = getWindowSize();
        game.scale.setGameSize(rect[0], rect[1]);
    };
    game.time.advancedTiming = true;
    game.stage.backgroundColor = '#0080ff';

    // load assets
    game.load.onFileError.add(this.fileError, this);
    game.load.image('ball', 'assets/ball.png');
    game.load.shader('bright', 'assets/bright.txt');
    if (Math.min(screen.width, screen.height) > 750) {
        this.gridPx = 72;
        game.load.atlasJSONArray('shapes', 'img/shapes_big.png', 'img/shapes_big.json');
        game.load.atlasJSONArray('number', 'img/number_big.png', 'img/number_big.json');
        game.load.atlasJSONArray('ui', 'img/ui_big.png', 'img/ui_big.json');
    }
    else {
        this.gridPx = 36;
        game.load.atlasJSONArray('shapes', 'img/shapes_small.png', 'img/shapes_small.json');
        game.load.atlasJSONArray('number', 'img/number_small.png', 'img/number_small.json');
        game.load.atlasJSONArray('ui', 'img/ui_small.png', 'img/ui_small.json');
    }
    game.load.image('background', ChristmasIsComing() ? 'assets/backgroundXmas.png' : 'assets/background.png');
    game.load.image('castle', 'assets/background-castle.png');
    if (Load.shouldLoadAudio()) {
        if (ChristmasIsComing()) {
            game.load.audio('music', ['assets/special/music3.ogg', 'assets/special/music3.mp3']);
            game.load.audio('music2', ['assets/special/deckthehall.ogg', 'assets/sound/deckthehall.mp3']);
        }
        else {
            game.load.audio('music', ['assets/sound/music.ogg', 'assets/sound/music.m4a', 'assets/sound/music.mp3']);
            game.load.audio('music2', ['assets/sound/music2.ogg', 'assets/sound/music2.m4a', 'assets/sound/music2.mp3']);
        }
        game.load.audio('match', ['assets/sound/match.wav', 'assets/sound/match.mp3']);
        game.load.audio('nomatch', ['assets/sound/nomatch.wav', 'assets/sound/nomatch.mp3']);
    }
    Translation = {};
    game.load.json('text', 'lang/en.json');
    var lang = navigator.languages || [navigator.language || navigator.browserLanguage];
    var supportedLanguage = {
      "en": 1,
      "zh": 1,
      "zh-TW": 1, "zh-Hant": 1, "zh-tw": 1, "zh-hant": 1,
      "zh-CN": 1, "zh-Hans": 1, "zh-cn": 1, "zh-hans": 1,
      "zh-HK": 1, "zh-MO": 1, "zh-hk": 1, "zh-mo": 1
    };
    for (var i = 0; i < lang.length; i++) {
      if (lang[i] in supportedLanguage) break;
    }
    var langname = lang[i];
    // Chinese is special case
    if (/^(zh-Hant|zh-HK|zh-MO)$/i.test(langname)) langname = "zh-TW";
    if (/^(zh-Hans|zh)$/i.test(langname)) langname = "zh-CN";
    game.load.json('translation', 'lang/' + langname + '.json');

    // create texture for showing match-3
    this.game.create.texture('whiteSquare', ['2']);

    // debugger
    this.input.onTap.add(function (pointer, dblClick) {
        if (dblClick) {
            promptBox(Translation['Input debug command:'], '', function (cmd) {
                try {
                    if (cmd) alertBox(window.eval(cmd) + "");
                } catch (e) {
                    alertBox(e.message + "");
                }
            });
        }
    });
};

Load.prototype.fileError = function (fileKey, file) {
    // translation is optional
    if (fileKey === "translation") return;
    var r = this.game.resolution;
    this.failed = true;
    this.loadBar.text = 'Fail to load asset "' + fileKey + '"';
    this.loadBar.x = this.game.width / 2 - this.loadBar.width / (2 * r);
    this.loadBar.y = this.game.height / 2 - this.loadBar.height / (2 * r);
};

Load.prototype.loadUpdate = function () {
    var r = Phaser.VERSION.startsWith("2.6.") ? this.game.resolution : 1.0;
    // HACK to get the text size
    if (!this.failed)
        this.loadBar.text = 'Loading assets... ' + this.load.progress + '%';
    this.loadBar.x = this.game.width / 2 - this.loadBar.width / (2 * r);
    this.loadBar.y = this.game.height / 2 - this.loadBar.height / (2 * r);
};

Load.prototype.create = function() {
    if (this.failed) return;
    Translation = this.game.cache.getJSON('text') || {};
    Object.assign(Translation, this.game.cache.getJSON('translation'));
    this.game.clearBeforeRender = false;
    this.background = this.add.sprite(0, 0, 'background');
    this.background.width = this.game.width;
    this.background.height = this.game.height;
    this.background.moveDown();
    this.loadBar.text = Translation['Start!'] || "Start!";
    this.playButton = this.add.button(this.game.width / 2 - 100, this.game.height / 2 - 35,
      'ball', this.playGame, this);
    this.loadBar.moveUp();
    this.playButton.width = 200;
    this.playButton.height = 70;
};

Load.prototype.update = function () {
    if (this.failed) {
        this.loadUpdate();
        return;
    }
    var w = this.game.width;
    var h = this.game.height;
    var r = Phaser.VERSION.startsWith("2.6.") ? this.game.resolution : 1.0;
    // HACK to get the text size
    this.loadBar.x = w / 2 - this.loadBar.width / (2 * r);
    this.loadBar.y = h / 2 - this.loadBar.height / (2 * r);
    this.playButton.x = w / 2 - 200 / 2;
    this.playButton.y = h / 2 - 70 / 2;
    this.background.width = w;
    this.background.height = h;
};

Load.prototype.playGame = function () {
    if (this.game.sound.usingWebAudio) {
        var ctx = this.game.sound.context;
        if (ctx.state === "suspended") {
            ctx.resume();
        }
    }
    this.state.start('MainMenu');
};

Load.prototype.testRenderer = function () {
    // Test the renderer
    var renderer = 'unknown';
    switch (this.game.renderType) {
      case Phaser.CANVAS:
        renderer = 'CANVAS';
        break;
      case Phaser.WEBGL:
        renderer = 'WEBGL';
        break;
      case Phaser.HEADLESS:
        renderer = 'HEADLESS';
        break;
    }
    // don't store into localStorage!
    try {
        // localStorage.setItem('ShapeClear_renderer', renderer);
    }
    catch (e) {
        ;
    }
};
