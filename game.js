var health = 100;

function dig(){
    health--
    update()
}

function sweep(){
    health-=2
    update()
}

function metalDetector(){
    health-=25
    update()
}


function update(){
    if(health <= 0){
        health = 0
        document.getElementById("victory").innerText = "You have found the gold of El Dorado"
    }
    document.getElementById("health").innerText = health
}
update()

function reset(){
    health = 100
     document.getElementById("victory").innerText = " "
    update()
}
