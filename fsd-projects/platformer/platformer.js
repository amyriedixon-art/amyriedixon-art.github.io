$(function () {
// initialize canvas and context when able to
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
window.addEventListener("load", loadJson);

function setup() {
if (firstTimeSetup) {
halleImage = document.getElementById("player");
projectileImage = document.getElementById("projectile");
cannonImage = document.getElementById("cannon");
$(document).on("keydown", handleKeyDown);
$(document).on("keyup", handleKeyUp);
firstTimeSetup = false;
//start game
setInterval(main, 1000 / frameRate);
}

// Create walls - do not delete or modify this code
createPlatform(-60, -60, canvas.width + 120, 60); // top wall
createPlatform(-60, canvas.height - 60, canvas.width + 120, 300, "navy"); // bottom wall
createPlatform(-60, -60, 60, canvas.height + 600); // left wall
createPlatform(canvas.width, -60, 60, canvas.height + 120); // right wall

//////////////////////////////////
// ONLY CHANGE BELOW THIS POINT //
//////////////////////////////////

// TODO 1 - Enable the Grid
toggleGrid();


// TODO 2 - Create Platforms
createPlatform(300,600, 200,20);
createPlatform(300,500,200,40);
createPlatform(700,400,200,20);
createPlatform(700,300,200,50);
createPlatform(1100,400,200,20);
createPlatform(1100,500,200,80);
createPlatform(175, 250, 200,20)
createPlatform(175, 324, 200,100)



// TODO 3 - Create Collectables
createCollectable("database",1130,350,1.5,3.7);
createCollectable("diamond",520,450,0.5,0.7);
createCollectable("max",780,300,0.5,4.7);
createCollectable('steve', 1100, 624, 0.5, 2.7);
createCollectable('database', 250, 625, 0.5, 0.7);
createCollectable('database', 475, 300, 0.5, 0.7);


// TODO 4 - Create Cannons
createCannon("left",850,1000);
createCannon("top",480,2000);
createCannon("right",320,2000);
createCannon('bottom', 600, 3000);
createCannon('bottom', 600, 1000);  

//////////////////////////////////
// ONLY CHANGE ABOVE THIS POINT //
//////////////////////////////////
}

registerSetup(setup);
});