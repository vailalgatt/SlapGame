//public

//private
//service

function GameService() {
    var health = 100;
    this.getHealth = function(){
        return health     
    }

    var actions = {
        dig: 1,
        sweep: 2,
        metalDetector: 25,
        reset: -100
    }

    this.modifyHealth = function(action) {

        health -= actions[action]

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