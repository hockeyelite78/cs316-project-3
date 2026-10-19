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

for (let i = 0; i < 7; i++) {
   // pick one of the five images at random
   let index = Math.floor(Math.random() * fishImages.length);

   // make a new <img> element and configure it
   let img = document.createElement("img");
   img.src = fishImages[index];
   img.className = "fish";

   // random spot, kept far enough from the right/bottom edges
   let x = Math.floor(Math.random() * (TANK_WIDTH - FISH_WIDTH));
   let y = Math.floor(Math.random() * (TANK_HEIGHT - FISH_HEIGHT));
   img.style.left = x + "px";
   img.style.top = y + "px";

   // put it in the tank
   tank.appendChild(img);
}