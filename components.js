let components = {
  "dims": [
    1000,
    1000
  ],
  "baseScale": 0.3,
  "__playerArea": {
    "width": 800,
    "height": 600
  },
  "__playerOrder": [
    "red",
    "blue",
    "green",
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
      "decks": {accepts: ["deck", "bank"], coords: [{"x":600,"y":550},{"x":750,"y":550},{"x":600,"y":650},{"x": 750, "y": 800},{"x": 750, "y": 900}, {"x": 750, "y": 1000}, {"x": 750, "y": 1100}]}
    }
  },
  "mainBoard": {
    "type": "board",
    "image": "url(http://cloud-3.steamusercontent.com/ugc/1839158662086900345/2ADAF68268E081B5D90A7E3DCD58DC81BBC30270/)",
    "x": 300,
    "y": 480,
    "width": 700,
    "height": 700,
    "selectable": false,
    "scaleMult": 0.3,
    "positions": {"dims":[1000,1000],"pirate":{"multi":true,"gapSize":50,"accepts":["pirate"],"coords":[{"x":240,"y":70},{"x":650,"y":150},{"x":425,"y":200},{"x":225,"y":170},{"x":225,"y":240},{"x":620,"y":220},{"x":700,"y":240},{"x":750,"y":360},{"x":840,"y":400},{"x":900,"y":650},{"x":740,"y":780}]},"mission":{"accepts":["missions", "card"],"coords":[{"x":100,"y":65},{"x":400,"y":110},{"x":680,"y":60},{"x":900,"y":70},{"x":140,"y":330},{"x":570,"y":360},{"x":910,"y":250},{"x":530,"y":485},{"x":730,"y":480},{"x":190,"y":555},{"x":397,"y":670},{"x":710,"y":668},{"x":100,"y":930},{"x":420,"y":938},{"x":655,"y":910},{"x":890,"y":880}]},"playerShip":{"multi":true,"accepts":["playerShip"],"coords":[{"x":110,"y":160},{"x":315,"y":185},{"x":570,"y":80},{"x":830,"y":130},{"x":800,"y":300},{"x":536,"y":270},{"x":240,"y":385},{"x":430,"y":410},{"x":840,"y":540},{"x":80,"y":500},{"x":270,"y":700},{"x":585,"y":640},{"x":920,"y":780},{"x":97,"y":830},{"x":300,"y":920},{"x":575,"y":830}]},
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
        "accepts": ["meeple"],
        multi: true,
        gapSize: 30,
        "coords": [
        {x: 32, y: 444},
        {x: 94, y: 444},
        {x: 156, y: 444},
        {x: 218, y: 444}
        ]
      }
    },
    "scaleMult": 0.46
  },
  "playerBoard": {
    "type": "board",
    "image": "url(http://cloud-3.steamusercontent.com/ugc/1849290583449527719/3948B0CD3D95D1123E02B1732798501EE7075E1F/)",
    "width": 800,
    "height": 400,
    "selectable": false,
    "x": 50,
    "y": 32,
    "positions": {"dims":[1000,500],
    "inventory":{"accepts":["damage","artifact","pirate"],"coords":[{"x":60,"y":454},{"x":150,"y":454},{"x":238,"y":454},{"x":325,"y":454},{"x":415,"y":454},{"x":502,"y":454},{"x":590,"y":454}]},
    
    "onDuty":{"accepts":["meeple"],"multi":true,"gapSize":30,"coords":[{"y":78,"x":620}]},
    
    "maintenance":{"accepts":["meeple"],"coords":[{"x":171,"y":75},{"x":219,"y":75},{"x":264,"y":75}]},
    "mission":{"accepts":["meeple"],multi: true,"coords":[{"y":175, "x": 190}]},"rooms":{"accepts":["damage","meeple"],"multi": "true", "coords":[{"x":237,"y":352},{"x":445,"y":348},{"x":653,"y":348},{"x":840,"y":250},{"x":655,"y":250},{"x":445,"y":250},{"x":236,"y":254}]}}
  },
  "playerTechBoard": {
    "image": "url(http://cloud-3.steamusercontent.com/ugc/1849291128389966059/D9A3B9894CF3CD0A246676031323485702F18804/)",
    "width": 800,
    "height": 190,
    "x": 50,
    "y": 82,
    "selectable": false,
    "scaleMult": 0.55,
    positions: {
      "dims": [100, 2],
      "techs": {
        "accepts": ["damage", "tech-1", "tech-2"],
        coords: [
        {"x":10,"y":1},
        {"x":26,"y":1},
        {"x":42,"y":1},
        {"x":58,"y":1},
        {"x":74,"y":1},
        {"x":90,"y":1}
        ],

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
    width: 40,
    height: 40,
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
    "height": 600,
    "x": 50,
    "y": 50
  }
}
module.exports = components;