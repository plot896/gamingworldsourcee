export var idle = {
  body: [
    {
      f: 0,
      p: [0, 0],
    },
    {
      f: 10,
      p: [0, -1],
    },
    {
      f: 20,
      p: [0, 0],
    },
  ],
  head: [
    {
      f: 0,
      p: [0, 0],
    },
    {
      f: 5,
      p: [0, 1],
    },
    {
      f: 20,
      p: [0, 0],
    },
  ],
  sword: [
    {
      f: 0,
      r: 0,
    },
    {
      f: 10,
      r: -0.045,
    },
    {
      f: 20,
      r: 0,
    },
  ],
  shield: [
    {
      f: 0,
      r: 0.14,
      p: [0, 2.5],
    },
    {
      f: 10,
      r: 0.16,
      p: [0.5, 3],
    },
    {
      f: 20,
      r: 0.14,
      p: [0, 2.5],
    },
  ],
};

export var shieldIdle = {
  body: [
    {
      f: 0,
      r: 0.1,
      p: [0, 4],
    },
    {
      f: 10,
      r: 0.1,
      p: [0, 3.5],
    },
    {
      f: 20,
      r: 0.1,
      p: [0, 4],
    },
  ],
  head: [
    {
      f: 0,
      p: [0, 5],
    },
    {
      f: 5,
      p: [0, 4.5],
    },
    {
      f: 20,
      p: [0, 5],
    },
  ],
  sword: [
    {
      f: 0,
      r: 0.25,
      p: [-6, 2],
    },
    {
      f: 10,
      r: 0.25,
      p: [-6, 1.5],
    },
    {
      f: 20,
      r: 0.25,
      p: [-6, 2],
    },
  ],
  shield: [
    {
      f: 0,
      p: [8, 1.5],
    },
    {
      f: 0,
      p: [8.25, 1.75],
    },
    {
      f: 20,
      p: [8, 1.5],
    },
  ],
};

export var shieldWalk = {
  body: [
    {
      f: 0,
      r: 0.2,
      p: [0, 2],
    },
    {
      f: 3,
      r: 0.2,
      p: [0, 3],
    },
    {
      f: 7,
      r: 0.2,
      p: [0, 2],
    },
    {
      f: 13,
      r: 0.2,
      p: [0, 3],
    },
    {
      f: 20,
      r: 0.2,
      p: [0, 2],
    },
  ],
  head: [
    {
      f: 0,
      r: -0.1,
      p: [1, 4],
    },
    {
      f: 3,
      r: -0.1,
      p: [1, 5],
    },
    {
      f: 7,
      r: -0.1,
      p: [1, 4],
    },
    {
      f: 13,
      r: -0.1,
      p: [1, 5],
    },
    {
      f: 20,
      r: -0.1,
      p: [1, 4],
    },
  ],
  sword: [
    {
      f: 0,
      r: 0.2,
      p: [-3, 1],
    },
    {
      f: 10,
      r: 0.25,
      p: [-6, 1],
    },
    {
      f: 20,
      r: 0.2,
      p: [-3, 1],
    },
  ],
  shield: [
    {
      f: 0,
      p: [13.5, -1.75],
    },
    {
      f: 10,
      p: [14, -2],
    },
    {
      f: 20,
      p: [13.5, -1.75],
    },
  ],
  legL: [
    {
      f: 0,
      r: 1,
    },
    {
      f: 10,
      r: -1,
    },
    {
      f: 20,
      r: 1,
    },
  ],
  legR: [
    {
      f: 0,
      r: -1,
    },
    {
      f: 10,
      r: 1,
    },
    {
      f: 20,
      r: -1,
    },
  ],
};

export var walk = {
  body: [
    {
      f: 0,
      r: 0.1,
      p: [0, 0],
    },
    {
      f: 3,
      r: 0.1,
      p: [0, 2],
    },
    {
      f: 7,
      r: 0.1,
      p: [0, 0],
    },
    {
      f: 13,
      r: 0.1,
      p: [0, 2],
    },
    {
      f: 20,
      r: 0.1,
      p: [0, 0],
    },
  ],
  head: [
    {
      f: 0,
      r: -0.1,
      p: [0, 0],
    },
    {
      f: 3,
      r: -0.1,
      p: [0, 2],
    },
    {
      f: 7,
      r: -0.1,
      p: [0, 0],
    },
    {
      f: 13,
      r: -0.1,
      p: [0, 2],
    },
    {
      f: 20,
      r: -0.1,
      p: [0, 0],
    },
  ],
  sword: [
    {
      f: 0,
      r: -0.24,
      p: [3, -4],
    },
    {
      f: 10,
      r: -0.2,
      p: [0, -4],
    },
    {
      f: 20,
      r: -0.24,
      p: [3, -4],
    },
  ],
  shield: [
    {
      f: 0,
      r: 0.24,
      p: [0, 0],
    },
    {
      f: 10,
      r: 0.2,
      p: [3, 0],
    },
    {
      f: 20,
      r: 0.24,
      p: [0, 0],
    },
  ],
  legL: [
    {
      f: 0,
      r: 1.4,
    },
    {
      f: 10,
      r: -1.4,
    },
    {
      f: 20,
      r: 1.4,
    },
  ],
  legR: [
    {
      f: 0,
      r: -1.4,
    },
    {
      f: 10,
      r: 1.4,
    },
    {
      f: 20,
      r: -1.4,
    },
  ],
};

export var attack = {
  body: [
    {
      f: 0,
      r: 0.1,
    },
    {
      f: 16,
      r: 0.1,
    },
  ],
  sword: [
    {
      f: 0,
      r: -1.5,
      p: [0, -8],
    },
    {
      f: 2,
      r: -1.5,
      p: [0, -8],
    },
    {
      f: 8,
      r: 0,
      p: [18, -4],
    },
    {
      f: 12,
      r: 0.25,
      p: [12, -4],
    },
    {
      f: 16,
      r: 0,
      p: [0, -4],
    },
  ],
  shield: [
    {
      f: 0,
      p: [0, 0],
    },
    {
      f: 16,
      p: [-8, 0],
    },
  ],
  legL: [
    {
      f: 0,
      r: 0,
    },
    {
      f: 8,
      r: 1,
    },
    {
      f: 16,
      r: 0,
    },
  ],
  legR: [
    {
      f: 0,
      r: 0,
    },
    {
      f: 8,
      r: -1,
    },
    {
      f: 16,
      r: 0,
    },
  ],
};

export var altAttack = {
  ...attack,
  body: [
    {
      f: 0,
      r: 0.3,
      p: [0, 2],
    },
    {
      f: 16,
      r: 0.3,
      p: [0, 2],
    },
  ],
  head: [
    {
      f: 0,
      r: -0.1,
      p: [1, 4],
    },
    {
      f: 16,
      r: -0.1,
      p: [1, 4],
    },
  ],
  sword: [
    {
      f: 0,
      r: 0.2,
      p: [0, 0],
    },
    {
      f: 16,
      r: 0.2,
      p: [-8, 0],
    },
  ],
  shield: [
    {
      f: 0,
      p: [14, 0],
    },
    {
      f: 4,
      p: [24, 0],
    },
    {
      f: 10,
      p: [24, 0],
    },
    {
      f: 16,
      p: [14, 0],
    },
  ],
};

export var specialAttack = {
  body: [
    {
      f: 0,
      r: -0.1,
      p: [0, 0]
    },
    {
      f: 6,
      r: -0.1,
      p: [0, 0]
    },
    {
      f: 24,
      r: 0.5,
      p: [0, 5]
    },
    {
      f: 36,
      r: 0.5,
      p: [0, 5]
    }
  ],
  head: [
    {
      f: 0,
      r: -0.1,
      p: [0, 0]
    },
    {
      f: 6,
      r: -0.1,
      p: [0, 0]
    },
    {
      f: 24,
      r: -0.3,
      p: [0, 5]
    },
    {
      f: 36,
      r: -0.3,
      p: [0, 5]
    }
  ],
  sword: [
    {
      f: 0,
      r: -Math.PI/2,
      p: [0, -10]
    },
    {
      f: 6,
      r: -Math.PI/2,
      p: [0, -10]
    },
    {
      f: 20,
      r: -Math.PI/2,
      p: [10, 10]
    },
    {
      f: 36,
      r: -Math.PI/2,
      p: [10, 10]
    }
  ],
  shield: [
    {
      f: 0,
      r: -0.1,
      p: [10, -10]
    },
    {
      f: 6,
      r: -0.1,
      p: [10, -10]
    },
    {
      f: 20,
      r: 0,
      p: [16, 12]
    },
    {
      f: 36,
      r: 0,
      p: [16, 12]
    }
  ],
  legL: [
    {
      f: 0,
      r: 1,
    },
    {
      f: 6,
      r: 1.2,
    },
    {
      f: 24,
      r: .5,
    },
    {
      f: 36,
      r: 0.5,
    }
  ],
  legR: [
    {
      f: 0,
      r: -1,
    },
    {
      f: 6,
      r: -1.2,
    },
    {
      f: 24,
      r: 0,
    },
    {
      f: 36,
      r: 0,
    }
  ]
}