let components = {
  "dims": [
    1000,
    1000
  ],
  "baseScale": 0.3,
  "__playerArea": {
    "width": 800,
    "height": 800
  },
  "__playerOrder": [
    "red",
    "green",
    "blue",
    "yellow"
  ],
  "root": {
    "height": 800,
    "width": 1200,
    "positions": {
      "dims": [
        1000,
        1000
      ],
      "decks": {
        "accepts": [
          "deck",
          "bank"
        ],
        "coords": [
          {
            "x": 600,
            "y": 550
          },
          {
            "x": 750,
            "y": 550
          },
          {
            "x": 600,
            "y": 650
          },
          {
            "x": 750,
            "y": 800
          },
          {
            "x": 750,
            "y": 900
          },
          {
            "x": 750,
            "y": 1000
          },
          {
            "x": 750,
            "y": 1100
          }
        ]
      }
    },
    "selectable": false
  },
  "mainBoard": {
    "type": "board",
    "image": "url(http://cloud-3.steamusercontent.com/ugc/1835782295709379051/84CD2C192B91890C9E8AE21B4456BAE12061E853/)",
    "x": 300,
    "y": 480,
    "width": 700,
    "height": 700,
    "selectable": false,
    "scaleMult": 0.4,
    "positions": {
      "dims": [
        1000,
        1000
      ],
      "pirate": {
        "multi": true,
        "gapSize": 50,
        "accepts": [
          "pirate"
        ],
        "coords": [
          {"x":330,"y":70},
          {"x":698,"y":170},
          {"x":560,"y":190},
          {"x":265,"y":170},
          {"x":265,"y":220},
          {"x":390,"y":270},
          {"x":640,"y":240},
          {"x":420,"y":350},
          {"x":830,"y":395},
          {"x":750,"y":560},
          {"x":530,"y":540},
          {"x":530,"y":540},
          {"x":530,"y":540},
          {"x":530,"y":540},
          {"x":530,"y":540},
          {"x":530,"y":540},
          {"x":530,"y":540},
          {"x":530,"y":540},
          {"x":530,"y":540},
          {"x":530,"y":540},
          {"x":530,"y":540},
          {"x":530,"y":540},
          
        ]
      },
      "mission": {
        "accepts": [
          "missions",
          "card"
        ],
        "coords": [{"x":155,"y":75},{"x":470,"y":110},{"x":820,"y":100},{"x":190,"y":310},{"x":565,"y":390},{"x":890,"y":310},{"x":770,"y":480},{"x":195,"y":535},{"x":440,"y":660},{"x":765,"y":668},{"x":145,"y":890},{"x":550,"y":928},{"x":865,"y":910}]
      },
      "playerShip": {
        "multi": true,
        "accepts": [
          "playerShip"
        ],
        "coords": [
          {
            "x": 110,
            "y": 160
          },
          {
            "x": 315,
            "y": 185
          },
          {
            "x": 570,
            "y": 80
          },
          {
            "x": 830,
            "y": 130
          },
          {
            "x": 800,
            "y": 300
          },
          {
            "x": 536,
            "y": 270
          },
          {
            "x": 240,
            "y": 385
          },
          {
            "x": 430,
            "y": 410
          },
          {
            "x": 840,
            "y": 540
          },
          {
            "x": 80,
            "y": 500
          },
          {
            "x": 270,
            "y": 700
          },
          {
            "x": 585,
            "y": 640
          },
          {
            "x": 920,
            "y": 780
          },
          {
            "x": 97,
            "y": 830
          },
          {
            "x": 300,
            "y": 920
          },
          {
            "x": 575,
            "y": 830
          }
        ]
      }
    }
  },
  "techSupply": {
    "type": "board",
    "width": 450,
    "height": 370,
    "selectable": false,
    "y": 300,
    "x": 800,
    "image": "url(http://cloud-3.steamusercontent.com/ugc/1849290583449482883/47D2DF312F3D8A823F7ED34EB4864A1259800A86/)",
    "positions": {
      "dims": [
        250,
        470
      ],
      "tech": {
        "accepts": [
          "tech-1",
          "tech-2"
        ],
        "coords": [
          {
            "x": 32,
            "y": 300
          },
          {
            "x": 94,
            "y": 300
          },
          {
            "x": 158,
            "y": 300
          },
          {
            "x": 218,
            "y": 300
          },
          {
            "x": 63,
            "y": 100
          },
          {
            "x": 125,
            "y": 100
          },
          {
            "x": 188,
            "y": 100
          }
        ]
      },
      "meeple": {
        "accepts": [
          "meeple"
        ],
        "multi": true,
        "gapSize": 30,
        "coords": [
          {
            "x": 32,
            "y": 444
          },
          {
            "x": 94,
            "y": 444
          },
          {
            "x": 156,
            "y": 444
          },
          {
            "x": 218,
            "y": 444
          }
        ]
      }
    },
    "scaleMult": 0.46
  },
  "playerBoard": {
    "type": "board",
    "image": "url(http://cloud-3.steamusercontent.com/ugc/1839159157677242297/01B2B62042121E4D01A73BC8E0630C16AEC72A2C/)",
    "width": 800,
    "height": 400,
    "selectable": false,
    "x": 50,
    "y": 25,
    "positions": {
      "dims": [
        1000,
        500
      ],
      "inventory": {
        "accepts": [
          "damage",
          "artifact",
          "pirate"
        ],
        "coords": [
          {
            "x": 60,
            "y": 454
          },
          {
            "x": 150,
            "y": 454
          },
          {
            "x": 238,
            "y": 454
          },
          {
            "x": 325,
            "y": 454
          },
          {
            "x": 415,
            "y": 454
          },
          {
            "x": 502,
            "y": 454
          },
          {
            "x": 590,
            "y": 454
          }
        ]
      },
      "onDuty": {
        "accepts": [
          "meeple"
        ],
        "multi": true,
        "gapSize": 30,
        "coords": [
          {
            "y": 78,
            "x": 620
          }
        ]
      },
      "maintenance": {
        "accepts": [
          "meeple"
        ],
        "coords": [
          {
            "x": 171,
            "y": 75
          },
          {
            "x": 219,
            "y": 75
          },
          {
            "x": 264,
            "y": 75
          }
        ]
      },
      "mission": {
        "accepts": [
          "meeple"
        ],
        "multi": true,
        "coords": [
          {
            "y": 390,
            "x": 320
          }
        ]
      },
      "rooms": {
        "accepts": [
          "damage",
          "meeple"
        ],
        "multi": "true",
        "coords": [{"x":857,"y":225},{"x":699,"y":225},{"x":610,"y":225},{"x":489,"y":225},{"x":403,"y":225},{"x":280,"y":225},{"x":193,"y":225}]
      }
    }
  },
  "playerTechBoard": {
    "image": "url(http://cloud-3.steamusercontent.com/ugc/1849291128389966059/D9A3B9894CF3CD0A246676031323485702F18804/)",
    "width": 800,
    "height": 190,
    "x": 50,
    "y": 65,
    "selectable": false,
    "scaleMult": 0.55,
    "positions": {
      "dims": [
        100,
        2
      ],
      "techs": {
        "accepts": [
          "damage",
          "tech-1",
          "tech-2"
        ],
        "coords": [
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 26,
            "y": 1
          },
          {
            "x": 42,
            "y": 1
          },
          {
            "x": 58,
            "y": 1
          },
          {
            "x": 74,
            "y": 1
          },
          {
            "x": 90,
            "y": 1
          }
        ]
      },
      "completed_missions": {
        "accepts": [
          "missions"
        ],
        "multi": true,
        "coords": [
          {
            "y": 3,
            "x": 50
          }
        ]
      }
    }
  },
  "damage": {
    "type": "token",
    "width": 30,
    "height": 30,
    "image": "url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Red_Circle%28small%29.svg/2048px-Red_Circle%28small%29.svg.png)"
  },
  "meeple": {
    "type": "token",
    "width": 30,
    "height": 30,
    "variables": {
      "level": [
        "ensign",
        "officer"
      ],
      "color": [
        "gray",
        "red",
        "blue",
        "yellow",
        "green"
      ]
    },
    "image": [
      {
        "condition": {
          "level": "ensign",
          "color": "red"
        },
        "result": "url(http://cloud-3.steamusercontent.com/ugc/1818866545694778717/4B080AE604BD82713661749CC7109E80146B7174/)"
      },
      {
        "condition": {
          "level": "ensign",
          "color": "yellow"
        },
        "result": "url(http://cloud-3.steamusercontent.com/ugc/1818866545694780621/5A2031D5E1E90120EE5352386CD774DE9411E3A1/)"
      },
      {
        "condition": {
          "level": "ensign",
          "color": "blue"
        },
        "result": "url(http://cloud-3.steamusercontent.com/ugc/1818866545694781853/46C1D645F032517AA3F9C80A8160EA515D986F04/)"
      },
      {
        "condition": {
          "level": "officer",
          "color": "red"
        },
        "result": "url(https://storage.googleapis.com/cgo-deck-assets/star-meeple/redoff.png)"
      },
      {
        "condition": {
          "level": "officer",
          "color": "yellow"
        },
        "result": "url(https://storage.googleapis.com/cgo-deck-assets/star-meeple/yellowoff.png)"
      },
      {
        "condition": {
          "level": "officer",
          "color": "blue"
        },
        "result": "url(https://storage.googleapis.com/cgo-deck-assets/star-meeple/blueoff.png)"
      },
      {
        "condition": {
          "color": "green"
        },
        "result": "url(http://cloud-3.steamusercontent.com/ugc/1768207004157223642/51CEAC356FD5AE622737E0E7518FD2B30C4F0274/)"
      },
      {
        "condition": {
          "color": "gray"
        },
        "result": "url(http://cloud-3.steamusercontent.com/ugc/1818866545694790478/B35232C64A2BF8E0F44521B0CE330B42B46DA886/)"
      }
    ],
    "text": "level undefined"
  },
  "pirate": {
    "type": "token",
    "variables": {
      "reward": [
        "artifact",
        "android"
      ]
    },
    "width": 40,
    "height": 40,
    "image": [
      {
        "condition": {
          "reward": "android"
        },
        "result": "url(http://cloud-3.steamusercontent.com/ugc/1849290583451236935/E2F0837FD6E833E3C78D6C07487760730E43E288/)"
      },
      {
        "condition": {
          "reward": "artifact"
        },
        "result": "url(http://cloud-3.steamusercontent.com/ugc/1849290583451239800/D71378D58B51D5F28FEE18D3CDF7FE461A00848A/)"
      }
    ]
  },
  "pirateBag": {
    "left": 300,
    "top": 300,
    "width": 100,
    "height": 100
  },
  "artifactBag": {
    "left": 300,
    "top": 300,
    "width": 100,
    "height": 100
  },
  "artifact": {
    "type": "token",
    "width": 40,
    "height": 40,
    "variables": {
      "color": [
        "redyellow",
        "blueyellow",
        "redblue"
      ]
    },
    "image": [
      {
        "condition": {
          "color": "redyellow"
        },
        "result": "url(http://cloud-3.steamusercontent.com/ugc/1849290583446925760/8F99FCCA4F30652475CFE94A4ACB271E21E708A8/)"
      },
      {
        "condition": {
          "color": "blueyellow"
        },
        "result": "url(http://cloud-3.steamusercontent.com/ugc/1849290583446927072/78FF9B515DF1AF6A5EEF1F22F50E405D39B01029/)"
      },
      {
        "condition": {
          "color": "redblue"
        },
        "result": "url(http://cloud-3.steamusercontent.com/ugc/1849290583446928346/C34A6FE919F410C48CFD2282983E0A469AC58764/)"
      }
    ]
  },
  "playerShip": {
    "type": "token",
    "variables": [
      "color"
    ],
    "width": 40,
    "height": 40,
    "image": "black"
  },
  "player-area": {
    "width": 800,
    "height": 900,
    "x": 50,
    "y": 50
  }
}
module.exports = components;