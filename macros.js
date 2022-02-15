// gameSituation, eventManager, options, macroName

switch(macroName) {
  case "takeDamage":
    console.log("taking damage yay");
    console.log(gameSituation, options);
    for (let player of gameSituation.players) {
      if (player.color == options.player) {
        console.log("found player red");
        for (let child of Object.values(player.children.unpositioned)) {
          if (child.name == "playerBoard") {
            for (let inventoryPos = 6; inventoryPos >= 0; --inventoryPos) {
              let containerId;
              for (let contId in gameSituation.containers) {
                if (contId.startsWith("bank-damageBag")) {
                  containerId = contId;
                }
              }
              if (!child.children.inventory[inventoryPos]) {
                eventManager.newEvent("game move", {
                  destinationId: child.id, 
                  positionName: "inventory",
                  positionIndex: inventoryPos,
                  type: "component reveal",
                  containerId
                })
              }
              
            }
          }
        }
      }
    }
    break;
  case "takeArtifact":
    
    break;
  case "takePirate":
    
    break;
}

return macroName;
