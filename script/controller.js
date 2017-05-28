// //controller 
// function GameController() {
//     var gameService = new GameService()

//     function drawGame() {
//         var health = gameService.getHealth()
//         if (health <= 0) {
//             document.getElementById("victory").innerText = "You have found the gold of El Dorado"
//         }
//         document.getElementById("health").innerText = health
//     }


//     this.dig = function() {
//         gameService.modifyHealth("dig")
//         drawGame()    
//     }

//      this.sweep = function() {
//         gameService.modifyHealth("sweep")
//         drawGame()    
//     }

//     this.metalDetector = function() {
//         gameService.modifyHealth("metalDetector")
//         drawGame()    
//     }

//      this.reset = function() {
//         gameService.modifyHealth("reset")
//         document.getElementById("victory").innerText = ""
//         drawGame()
//     }

//     this.water = function(){
//         gameService.activate("water")
//         drawGame()
//     }

//        this.shovel = function(){
//         gameService.activate("shovel")
//         drawGame()
//     }


//     drawGame()
// }

function GameController() {


  var service = new GameService()

  this.onAttackClick = function attack(targetName, type) {
    service.processAttack(targetName, type)
    update(service.getTarget(targetName))

  }

  function update(target) {
    if (target.health <= 0) {
      document.getElementById("victory").innerText = "You have found the gold of El Dorado"
    }
    else if (target.name == "player1") {
      document.getElementById('healthBar').innerHTML = target.health;
      document.getElementById('hits').innerHTML = target.hits
    }
    else if (target.name == "player2") {
      document.getElementById('healthBarTwo').innerHTML = target.health;
      document.getElementById('hitsTwo').innerHTML = target.hits
    }
  }

  this.giveItem = function getItem(targetName, itemName) {
    service.processItem(targetName, itemName)
  }

  //update()
}
