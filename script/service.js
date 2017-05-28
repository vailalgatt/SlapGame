// function GameService() {
//     var health = 100;
//     this.getHealth = function(){
//         return health     
//     }

//     var actions = {
//         dig: 10,
//         sweep: 20,
//         metalDetector: 25,
//         reset: -100
//     }

//     var water = {
//         modifyAmount: 10,
//         used: false,
//         active: false
//     }

//     var shovel = {
//         modifyAmount: 15,
//         used: false,
//         active: false
//     }

//     this.activate = function(mod){
//         if(mod == "water"){
//         water.active = true
//         } if(mod == "shovel"){
//         shovel.active = true
//         }
//     }


//     this.modifyHealth = function(action) {

//         health -= actions[action]

//         if(water.active == true && water.used == false){
//             health -= water.modifyAmount
//             water.used = true 
//         }
//         if(shovel.active == true && shovel.used == false && action == "dig"){
//             health -= shovel.modifyAmount
//             shovel.used = true
//         }



//         if (health <= 0) {
//             health = 0
//         }

//         if(health > 100){
//             health = 100
//         }

//     }


// }


function GameService() {

  function TargetMaker(name, health, dig, sweep, metalDetector) {
    this.name = name
    this.health = health
    this.hits = 0
    this.dig = dig
    this.sweep = sweep
    this.metalDetector = metalDetector
    this.items = []
  }

  var player1 = new TargetMaker("player1", 100, 7, 5, 10)
  var player2 = new TargetMaker("player2", 100, 9, 10, 20)

  this.getTarget = function getTarget(name) {
    if (name == player1.name) {
      return player1
    }
    else if (name == player2.name) {
      return player2
    }
  }


  this.processAttack = function attack(targetName, type) {
      var target = this.getTarget(targetName)
      if(!target){
        alert("ERROR")
      }
      
      var totalMod = calcMods(target)
      target.health -= target[type] * totalMod
      target.hits ++

      if(target.health <= 0 ){
        target.health = 0
      }
      if(target.health > 100){
        target.health = 100
      }
    }

    function calcMods(target){
      var totalMods = 1
      for (var i = 0; i < target.items.length; i++) {
        var item = target.items[i];
        totalMods -= item.modifier
      }
      return totalMods
    }


 function ItemMaker(name, modifier, description){
 this.name = name
 this.modifier = modifier
 this.description = description
 }

 var items = {
   water: new ItemMaker('water', 0.5, "Hydrate!"),
   shovel: new ItemMaker('shovel', 0.3, 'Give your hannds a break, use a shovel!'),
   heal: new ItemMaker('heal', 0.7, 'Take your rest day'),
 }

 this.processItem = function(targetName, itemName){
   var target = this.getTarget(targetName)
   if(!target){
     alert("ERROR")
   }
   target.items.push(items[itemName])
   console.log(target)
 }


  }