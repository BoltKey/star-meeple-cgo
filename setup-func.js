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
    for (let i of [0, 1, 2]) {
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
  }
  
  let pirateSupply = gameSituation.root.addComponent(gameSituation.createBank("pirateBag", {random: true, infinite: false, contentNames: ["pirate"]}), "decks", 3);
  
  const androidPirateAmt = 10;
  const artPirateAmt = 10;
  for (let i = 0; i < androidPirateAmt; ++i) {
    pirateSupply.addComponent(gameSituation.createComponent("pirate", {reward: "android"}));
  }
  for (let i = 0; i < artPirateAmt; ++i) {
    pirateSupply.addComponent(gameSituation.createComponent("pirate", {reward: "artifact"}));
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
  
  let techDeck = gameSituation.createDeck("tech-1", {shuffled: true, hidden: true, facedown: true});
  let techVpDeck = gameSituation.createDeck("tech-2", {shuffled: true, hidden: true, facedown: true});
  let missionDeck = gameSituation.createDeck("missions", {shuffled: true, hidden: true, facedown: true});
  gameSituation.root.addComponent(techDeck, "decks", 0);
  gameSituation.root.addComponent(techVpDeck, "decks", 1);
  gameSituation.root.addComponent(missionDeck, "decks", 2);
  
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
  for (var round = 0; round < 4; ++round) {
    for (var p = 0; p < gameSituation.getPlayers().length; ++p) {
      techSupply.addComponent(gameSituation.createComponent("meeple", {color: "gray", level: "ensign"}), "meeple", round);
    }
  }
  return 0;
}

module.exports = setup;