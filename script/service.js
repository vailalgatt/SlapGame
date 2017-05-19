function GameService() {
    var health = 100;
    this.getHealth = function(){
        return health     
    }

    var actions = {
        dig: 10,
        sweep: 20,
        metalDetector: 25,
        reset: -100
    }

    var water = {
        modifyAmount: 10,
        used: false,
        active: false
    }

    var shovel = {
        modifyAmount: 15,
        used: false,
        active: false
    }

    this.activate = function(mod){
        if(mod == "water"){
        water.active = true
        } if(mod == "shovel"){
        shovel.active = true
        }
    }
    

    this.modifyHealth = function(action) {

        health -= actions[action]
        
        if(water.active == true && water.used == false){
            health -= water.modifyAmount
            water.used = true 
        }
        if(shovel.active == true && shovel.used == false && action == "dig"){
            health -= shovel.modifyAmount
            shovel.used = true
        }

        

        if (health <= 0) {
            health = 0
        }

        if(health > 100){
            health = 100
        }

    }


}

// this.getAction = function getAction(){
//     return action.slice(0, action.length)
// }