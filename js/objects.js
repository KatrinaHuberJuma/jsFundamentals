var hef = new Creature("Heffalumps", "hufflehuffle");
var eeyore = new Creature("Eeyore", "Oh well.");
var kanga = new Creature("Kanga", "Where is Roo?!");

eeyore.addEast(hef).addSouth(kanga);

var owl = new Creature("Owl", "*Owl looks wise*");
var chris = new Creature("Christopher Robin", "Hello!");
var rabbit = new Creature("Rabbit", "Carrots!");
var winnie = new Creature("Winnie the Pooh", "Honey!");
winnie.needsHoney = true;


chris.addNorth(kanga).addSouth(winnie).addEast(rabbit).addWest(owl);


var piglet = new Creature("Piglet", "Oh d-d-d-dear! i wasn't expecting company!");
var bees = new Creature("Bees", "*buzz buzz.... SWARM!");
bees.hasHoney = true;
var tigger = new Creature("Tigger", "Tiggers are wonderful things!!!");
var gopher = new Creature("Gopher", "*whistling*")


winnie.addEast(bees).addSouth(tigger).addWest(piglet);

piglet.addNorth(owl);

rabbit.addSouth(bees).addEast(gopher)

var wood = {
    "hef": hef,
    "eeyore": eeyore,
    "kanga": kanga,
    "owl": owl,
    "chris": chris,
    "rabbit": rabbit,
    "gopher": gopher,
    "winnie": winnie,
    "piglet": piglet,
    "bees": bees,
    "tigger": tigger

}

