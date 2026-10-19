//put seven fish images into the tank at random positions


const tank = document.getElementById("tank");

const fishImages = [
   "images/fish1.jpeg",
   "images/fish2.jpeg",
   "images/fish3.jpeg",
   "images/fish4.jpeg",
   "images/fish5.jpeg",
   "images/fish6.jpeg",
   "images/fish7.jpeg",

];

const TANK_WIDTH = 900;
const TANK_HEIGHT = 600;
const FISH_WIDTH = 120;
const FISH_HEIGHT = 90;
const allFish = [];

for (let i = 0; i < 7; i++) {
   // pick one of the five images at random
   let index = Math.floor(Math.random() * fishImages.length);

   // make a new img element and configure it
   let img = document.createElement("img");
   img.src = fishImages[index];
   img.className = "fish";

   // random spot, kept far enough from the right/bottom edges
   let x = Math.floor(Math.random() * (TANK_WIDTH - FISH_WIDTH));
   let y = Math.floor(Math.random() * (TANK_HEIGHT - FISH_HEIGHT));
   img.style.left = x + "px";
   img.style.top = y + "px";

  
   
   tank.appendChild(img);

   let fish = { el: img, x: x, y: y, speed: 2, baseSpeed: 2, direction: 1 };

   allFish.push(fish);

   let delay = Math.floor(Math.random() * 6000) + 2000;

   setInterval(function() {
   if (Math.random() < 0.5){
    fish.direction = fish.direction * -1;
     }
    }, delay);
    
    // capture user click plus a console log for debugging
   img.addEventListener("click", function() {
   console.log("clicked");
   fish.speed = fish.baseSpeed * 3;
   clearTimeout(fish.timeoutId);
   fish.timeoutId = setTimeout(function() {
      fish.speed = fish.baseSpeed;
   }, 3000);
});

}
   // animation loop
function moveAll() {
   for (const fish of allFish) {
    fish.x += fish.direction * fish.speed;
    if (fish.x < 0) {
        fish.x = 0;
        fish.direction = 1;
    }
    if (fish.x > TANK_WIDTH - FISH_WIDTH){
        fish.x = TANK_WIDTH - FISH_WIDTH;
        fish.direction = -1;
    }
    fish.el.style.left = fish.x + "px";

   }
}

setInterval(moveAll, 30);
