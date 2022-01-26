async function setup(gameSituation) {
  let mainBoard = gameSituation.createComponent("mainBoard");
  gameSituation.root.addComponent(mainBoard);
  mainBoard.addComponent(
    gameSituation.createComponent("pirate", {reward: "android"}),
    "pirate", 8
  );
  mainBoard.addComponent(
    gameSituation.createComponent("pirate", {reward: "android"}),
    "pirate", 2
  );
  mainBoard.addComponent(
    gameSituation.createComponent("pirate", {reward: "artifact"}),
    "pirate", 4
  );
  mainBoard.addComponent(
    gameSituation.createComponent("pirate", {reward: "artifact"}),
    "pirate", 6
  );
  mainBoard.addComponent(
    gameSituation.createComponent("pirate", {reward: "artifact"}),
    "pirate", 6
  );
  
  
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
    let colors = ["red", "yellow", "blue"];
    for (let i = 0; i < 3; ++i) {
      playerBoard.addComponent(gameSituation.createComponent(
        "meeple", 
        {color: colors[i], level: 1}), 
        "maintenance", 0
      );
      
      playerBoard.addComponent(gameSituation.createComponent(
        "meeple", 
        {color: colors[i], level: 1}), 
        "onDuty", i);
    }
    player.setCounter("medals", 1);
    player.setCounter("score", 0);
  }
  
  let pirateSupply = mainBoard.addComponent(gameSituation.createComponent("pirateBag"));
  
  const androidPirateAmt = 10;
  const artPirateAmt = 10;
  for (let i = 0; i < androidPirateAmt; ++i) {
    pirateSupply.addComponent(gameSituation.createComponent("pirate", {reward: "android"}));
  }
  for (let i = 0; i < artPirateAmt; ++i) {
    pirateSupply.addComponent(gameSituation.createComponent("pirate", {reward: "artifact"}));
  }
  
  let techDeck = gameSituation.createDeck("tech-1", {shuffled: true, hidden: true, facedown: true});
  let techVpDeck = gameSituation.createDeck("tech-2", {shuffled: true, hidden: true, facedown: true});
  let missionDeck = gameSituation.createDeck("missions", {shuffled: true, hidden: true, facedown: true});
  
  let techSupply = gameSituation.createComponent("techSupply");
  gameSituation.root.addComponent(techSupply);
  for (var i = 0; i < 4; ++i) {
    techSupply.addComponent(techDeck.drawCard(), "tech", i);
  }
  for (var i = 4; i < 7; ++i) {
    techSupply.addComponent(techVpDeck.drawCard(), "tech", i);
  }
  
  for (var i = 0; i < 7; ++i) {
    mainBoard.addComponent(missionDeck.drawCard(), "mission", i)
  }
  return 0;
}

module.exports = setup;