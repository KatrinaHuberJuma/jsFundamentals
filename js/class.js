var randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};


var Creature = function(name, greeting){
    this.name = name;
    this.greet = function(){
        return greeting;
    }
    this.hasHoney = false;
    this.needsHoney = false;
    
}

Creature.prototype.addEast= function(creatureObj){
    this.east = creatureObj;
    creatureObj.west = this;
    return this;
}
Creature.prototype.addWest= function(creatureObj){
    this.west = creatureObj;
    creatureObj.east = this;
    return this;
}
Creature.prototype.addNorth= function(creatureObj){
    this.north = creatureObj;
    creatureObj.south = this;
    return this;
}
Creature.prototype.addSouth= function(creatureObj){
    this.south = creatureObj;
    creatureObj.north = this;
    return this;
}


var Player = function(){
    this.hasHoney = false;
}

Player.prototype.pickUp = function(){
    if (this.location.hasHoney === true) {
        this.hasHoney = true;
        alert("Honey picked up!")
    } else {
        alert("No honey here at " + this.location.name + "'s house");
    }
}

Player.prototype.dropOff = function(){
    if (this.location.needsHoney === true) {
        this.hasHoney = false;
        alert("Honey given to Winnie the Pooh!")
    } else {
        alert(this.location.name + "doesn't want this honey, keep going!");
    }
}

Player.prototype.mission = function() {
    var location = randomProperty(wood);
    this.location = location;
    console.log("START at " + location.name + "'s house");
    console.log("enter player.move('n') player.move('s') player.move('e') or player.move('w') to move")
}


Player.prototype.move = function(direction){

        if (direction == "n"){
            console.log("going north from " + this.location.name + "'s house");
            this.location = this.location.north;
        }
        if (direction == "s"){
            console.log("going south! from " + this.location.name + "'s house");
            this.location = this.location.south;
        }
        if (direction == "e"){
            console.log("going east from " + this.location.name + "'s house");
            this.location = this.location.east;
            
        }
        if (direction == "w"){
            console.log("going west from " + this.location.name + "'s house");
            this.location = this.location.west;
        } 
        if (this.location === undefined){
            console.log("You have left the woods. Game Over! start again")
            return this.mission()
        }
        console.log("you are at " + this.location.name + "'s house");
        return this.location;
    }
