//controller 
function GameController() {
    var gameService = new GameService()

    function drawGame() {
        var health = gameService.getHealth()
        if (health <= 0) {
            document.getElementById("victory").innerText = "You have found the gold of El Dorado"
        }
        document.getElementById("health").innerText = health
    }

    
    this.dig = function() {
        gameService.modifyHealth("dig")
        drawGame()    
    }

     this.sweep = function() {
        gameService.modifyHealth("sweep")
        drawGame()    
    }

    this.metalDetector = function() {
        gameService.modifyHealth("metalDetector")
        drawGame()    
    }

     this.reset = function() {
        gameService.modifyHealth("reset")
        document.getElementById("victory").innerText = ""
        drawGame()
    }
    
    this.water = function(){
        gameService.activate("water")
        drawGame()
    }

       this.shovel = function(){
        gameService.activate("shovel")
        drawGame()
    }
    

    drawGame()
}
