// gameSituation, eventManager, options, macroName

switch(macroName) {
  case "takeDamage":
    console.log("taking damage yay");
    console.log(gameSituation, options);
    for (let player of gameSituation.players) {
      if (player.color == options.color) {
        console.log("found player red");
        for (let child of Object.values(player.children.unpositioned)) {
          if (child.name == "playerBoard") {
            for (let inventoryPos = 6; inventoryPos >= 0; --inventoryPos) {
              if (!child.children.inventory[inventoryPos]) {
                eventManager.newEvent("game move", {
                  destinationId: child.id, 
                  positionName: "inventory",
                  positionIndex: inventoryPos,
                  type: "component reveal",
                  containerId: "idk"
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
