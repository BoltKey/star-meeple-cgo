//const deck = require("cgo-deck.js");
class deck {
  constructor(options) {
    // TODO: get deck from DB based on options.name, shuffle if options.shuffled
    this.cards = ["Ram Drive", "Transdimensional Storage", "test 3", "test 4", "test 5", "test 6", "test 7", "test 8"],
    this.deckName = options.name;
  }
  getMongoDoc() {
    return this.cards;
  }
  drawCard() {
    
    let drawnCard = this.cards.shift();
    return drawnCard;
  }
}
function setup(playerAmt, tableSettings) {
  let mainBoard = {
    pirates: [
      {type: "pirate", reward: "android", position: "8"},
      {type: "pirate", reward: "android", position: "2"},
      {type: "pirate", reward: "artifact", position: "4"},
      {type: "pirate", reward: "artifact", position: "6"},
    ],
    missions: [],
    playerShips: []
  }
  
  let playerBoard = {
    techPositions: [{type: {type: "damage"}}, {type: {type: "damage"}}, null, null, {type: "damage"}, {type: "damage"}],
    invPositions: [null, null, null, {type: "damage"}, {type: "damage"}, {type: "damage"}, {type: "damage"}],
    roomPositions: [{type: "damage"}, {type: "damage"}, {type: "damage"}, null, null, null, null],
    missionPositions: [],
    maintenancePositions: [
      {type: "meeple", color: "blue", level: "ensign"},
      {type: "meeple", color: "yellow", level: "ensign"},
      {type: "meeple", color: "red", level: "ensign"},
    ],
    onDutyPositions: [
      {type: "meeple", color: "red", level: "ensign"},
      {type: "meeple", color: "yellow", level: "ensign"},
      {type: "meeple", color: "blue", level: "ensign"},
    ],
  }
  
  let playerColors = ["brown", "turqoise", "purple", "orange"];
  let players = {};
  for (let playerNo = 0; playerNo < playerAmt; ++playerNo) {
    let playerColor = playerColors[playerNo]
    let player = {
      color: playerColor,
      medals: {type: "counter", value: 1},
      score: {type: "counter", value: 0},
      board: JSON.parse(JSON.stringify(playerBoard))
    }
    players[playerColor] = player;
    
    mainBoard.playerShips.push({type: "ship", color: playerColor, position: "planet" + Math.floor(1 + Math.random() * 8)});
  }
  
  pirateSupply = [];
  const androidPirateAmt = 10;
  const artPirateAmt = 10;
  for (let i = 0; i < androidPirateAmt; ++i) {
    pirateSupply.push({type: "pirate", reward: "android"})
  }
  for (let i = 0; i < artPirateAmt; ++i) {
    pirateSupply.push({type: "pirate", reward: "artifact"})
  }
  
  let techDeck = new deck({name: "tech-1", shuffled: true, hidden: true, facedown: true});
  let techVpDeck = new deck({name: "tech-2", shuffled: true, hidden: true, facedown: true});
  let missionDeck = new deck({name: "missions", shuffled: true, hidden: true, facedown: true});
  
  let techSupply = {
    cards: [
      techDeck.drawCard(),
      techDeck.drawCard(),
      techDeck.drawCard(),
      techDeck.drawCard(),
      techVpDeck.drawCard(),
      techVpDeck.drawCard(),
      techVpDeck.drawCard(),
    ]
  };
  
  let missionSupply = {
    cards: [
      missionDeck.drawCard(),
      missionDeck.drawCard(),
      missionDeck.drawCard(),
      missionDeck.drawCard(),
      missionDeck.drawCard(),
      missionDeck.drawCard(),
      missionDeck.drawCard(),
      missionDeck.drawCard(),
    ]
  };
  
  let techDeckData = techDeck.getMongoDoc();
  let techVpDeckData = techVpDeck.getMongoDoc();
  let missionDeckData = missionDeck.getMongoDoc();
  
  return {players, mainBoard, pirateSupply, techDeckData, techVpDeckData, missionDeckData, techSupply, missionSupply}
}

if (typeof process !== "undefined") {
  console.log(JSON.stringify(setup(2, {"start-missions": true}), null, 2));
}
setup;