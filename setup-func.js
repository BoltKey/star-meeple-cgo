async function setup(gameSituation) {
  let mainBoard = gameSituation.createComponent("mainBoard");
  
  
  let pirateSupply = gameSituation.root.addComponent(gameSituation.createBank("pirateBag", {random: true, infinite: false, contentNames: ["pirate"]}), "decks", 3);
  
  const androidPirateAmt = 10;
  const artPirateAmt = 10;
  for (let i = 0; i < androidPirateAmt; ++i) {
    pirateSupply.addComponent(gameSituation.createComponent("pirate", {reward: "android"}));
  }
  for (let i = 0; i < artPirateAmt; ++i) {
    pirateSupply.addComponent(gameSituation.createComponent("pirate", {reward: "artifact"}));
  }
  
  let piratePositions = [0, 7, 13, 20, 21];
  for (let index of piratePositions) {
    mainBoard.addComponent(pirateSupply.getComponent(), "pirate", index);
  }
  
  
  for (let player of gameSituation.getPlayers()) {
    let playerBoard = gameSituation.createComponent("playerBoard");
    player.area.addComponent(playerBoard);
    let techBoard = gameSituation.createComponent("playerTechBoard");
    player.area.addComponent(techBoard);
    
    for (let i of [0, 1, 4, 5]) {
      techBoard.addComponent(gameSituation.createComponent("damage"), "techs", i);
    }
    
    for (let i of [4, 5, 6]) {
      playerBoard.addComponent(gameSituation.createComponent("damage"), "inventory", i);
    }
    for (let i of [1, 3, 5]) {
      playerBoard.addComponent(gameSituation.createComponent("damage"), "rooms", i);
    }
    let colors = ["red", "yellow", "blue"];
    for (let i = 0; i < 3; ++i) {
      playerBoard.addComponent(gameSituation.createComponent(
        "meeple", 
        {color: colors[i], level: "ensign"}), 
        "maintenance", i
      );
      
      playerBoard.addComponent(gameSituation.createComponent(
        "meeple", 
        {color: colors[i], level: "ensign"}), 
        "onDuty", 0);
    }
    player.setCounter("medals", 1);
    player.setCounter("score", 0);
    
    mainBoard.addComponent(gameSituation.createComponent("playerShip", {"color": player.color}), "playerShip", 7);
  }
  
  
  let artifactSupply = gameSituation.root.addComponent(gameSituation.createBank("artifactBag", {random: true, infinite: false, contentNames: ["artifact"]}), "decks", 4);
  for (let artType of ["redblue", "blueyellow", "redyellow"]) {
    for (let i = 0; i < 8; ++i) {
      artifactSupply.addComponent(gameSituation.createComponent("artifact", {color: artType}));
    }
  }
  
  let damageSupply = gameSituation.root.addComponent(gameSituation.createBank("damageBag", {infinite: false, contentNames: ["damage"]}), "decks", 5);
  for (let i = 0; i < 30; ++i) {
    damageSupply.addComponent(gameSituation.createComponent("damage"));
  }
  
  let androidSupply = gameSituation.root.addComponent(gameSituation.createBank("androidBag", {infinite: false, contentNames: ["meeple"]}), "decks", 6);
  for (let i = 0; i < 30; ++i) {
    androidSupply.addComponent(gameSituation.createComponent("meeple", {color: "green", level: "ensign"}));
  }
  
  let techDeck = gameSituation.createDeck("tech-1", {shuffled: true, hidden: true, facedown: true, condition: {"Scoring": "no"}});
  let techVpDeck = gameSituation.createDeck("tech-1", {shuffled: true, hidden: true, facedown: true, condition: {"Scoring": "yes"}});
  let missionDeck = gameSituation.createDeck("missions", {shuffled: true, hidden: true, facedown: true});
  gameSituation.root.addComponent(techDeck, "decks", 0);
  //gameSituation.root.addComponent(techVpDeck, "decks", 1);
  gameSituation.root.addComponent(missionDeck, "decks", 2);
  
  let techSupply = gameSituation.createComponent("techSupply");
  gameSituation.root.addComponent(techSupply);
  for (var i = 0; i < 4; ++i) {
    techSupply.addComponent(techDeck.drawCard(), "tech", i);
  }
  for (var i = 4; i < 7; ++i) {
    techSupply.addComponent(techVpDeck.drawCard(), "tech", i);
  }
  
  let allPositions = [...Array(13).keys()];
  let missionPositions = [];
  for (let i = 0; i < 6; ++i) {
    let j = Math.floor(Math.random() * allPositions.length);
    missionPositions.push(allPositions[j]);
    allPositions.splice(j, 1);
  }
  let tokenPositions = [];
  for (let i = 0; i < 7; ++i) {
    let j = Math.floor(Math.random() * allPositions.length);
    tokenPositions.push(allPositions[j]);
    allPositions.splice(j, 1);
  }
  for (let position of missionPositions) {
    mainBoard.addComponent(missionDeck.drawCard(), "mission", position)
  }
  let tokens = ["1", "2", "3", "4", "5", "android", "artifact"];
  for (let i in tokenPositions) {
    let position = tokenPositions[i];
    mainBoard.addComponent(gameSituation.createComponent("planetToken", {meaning: tokens[i], side: "orange"}), "mission", position);
  }
  for (var round = 0; round < 4; ++round) {
    for (var p = 0; p < gameSituation.getPlayers().length; ++p) {
      techSupply.addComponent(gameSituation.createComponent("meeple", {color: "gray", level: "ensign"}), "meeple", round);
    }
  }
  
  gameSituation.root.addComponent(mainBoard);  // last so mission tooltips display at top
  return 0;
}

module.exports = setup;