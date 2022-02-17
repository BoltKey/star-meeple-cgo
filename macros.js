// gameSituation, eventManager, options, macroName


function getBoard() {
  for (let player of gameSituation.players) {
    if (player.color == options.player) {
      console.log("found player red");
      for (let child of Object.values(player.area.children.unpositioned)) {
        if (child.name == "playerBoard") {
          return child;
        }
      }
    }
  }
  
}
function emptyInvSpace(board, last) {
  for (let inventoryPos = last ? 6 : 0; inventoryPos != last ? -1 : 7; inventoryPos += last ? -1 : 1) {
    
    if (!board.children.inventory[inventoryPos]) {
      return inventoryPos;
    }
  }
  return -1;
}
let board, pos, containerId;
switch(macroName) {
  case "takeDamage":
    console.log("taking damage yay");
    console.log(gameSituation, options);
    board = getBoard();
    pos = emptyInvSpace(board, true);
    containerId;
    for (let contId in gameSituation.containers) {
      if (contId.startsWith("bank-damageBag")) {
        containerId = contId;
      }
    }
    eventManager.newEvent("game move", {
      destinationId: board.id, 
      positionName: "inventory",
      positionIndex: pos,
      type: "component reveal",
      containerId
    })
    break;
  case "gainArtifact": case "gainPirate":
    console.log("gaining artifact yay");
    console.log(gameSituation, options);
    board = getBoard();
    pos = emptyInvSpace(board, false);
    containerId;
    for (let contId in gameSituation.containers) {
      if (contId.startsWith("bank-" + (macroName == "gainArtifact" ? "artifact" : "pirate"))) {
        containerId = contId;
      }
    }
    eventManager.newEvent("game move", {
      destinationId: board.id, 
      positionName: "inventory",
      positionIndex: pos,
      type: "component reveal",
      containerId
    })
    break;
}

return macroName;
