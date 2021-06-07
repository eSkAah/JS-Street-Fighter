console.log("Ready !");
window.addEventListener("load", () => {
  
});

let spriteBoundsRyu = [
  {width:"250px", background: "ryu"},
  {width:"550px", background: "ryu-fall"}
];

let spriteBoundsKen = [
  {width:"250px", height:"500px", background: "ken"},
  {width:"500px", height:"500px", background: "ken-fall"},
  {width:"450px", height:"500px", background: "ken-hado"},
  {width:"300px", heigth:'500px', background: "ken-jump"},
  {width:"350px", height:"500px", background: "ken-walkb"},
  {width:"350px", height:"500px", background: "ken-walkf"},
];

/* Implémentation des personnages*/

document.addEventListener('keypress', (e) => {

  if(e.key == 'a'){
    hadoken();
  }
  if(e.key == 'z'){
    jump();
}
  if(e.key == 'q'){
    walkLeft();
}
  if(e.key == 'd'){
  walkRight();
}
if(e.key == 'e'){
  punch();
}
  
})



let ken = document.querySelector('.ken');
ken.style.left = 500+'px';
ken.style.bottom = -100+'px';
ken.style.width = spriteBoundsKen[0].width;
ken.style.height = spriteBoundsKen[0].height;

let ryu = document.getElementById('ryu');
ryu.style.left = 1000+'px';
ryu.style.bottom = -100+'px';
ryu.style.width = spriteBoundsRyu[0].width;
ryu.style.height = spriteBoundsRyu[0].height;



  /********************** HADOUKEN *********************/

function hadoken() {

let hadoukenSound = new Audio('sounds/hadoukenKen.wav');
let launchTime = Date.now();
let ryuLeft = parseInt(ryu.style.left);// L'endroit ou sa touche
let kenPosLeft = parseInt(ken.style.left);
let kenPosBottom = parseInt(ken.style.bottom);
let distanceHadouken = 150;
let hadoken = document.createElement('IMG');


ken.style.width = spriteBoundsKen[2].width ;
ken.style.backgroundImage = "url(img/"+spriteBoundsKen[2].background+".gif)";


hadoken.src = "img/hadoken.gif";
hadoken.classList.add('hadoken');
hadoukenSound.play();
hadoken.style.left = (kenPosLeft + distanceHadouken) + 'px';// position de départ du Hadoken
setTimeout(() => { hadoken.style.left = document.body.clientWidth + 'px'; }, 1);

let interval = setInterval( ()=> {
let positionHadokenEnTransition = ((kenPosLeft + distanceHadouken) + ((Date.now() - launchTime)/1500)*(document.body.clientWidth - (kenPosLeft + distanceHadouken))) + hadoken.clientWidth ;

if(positionHadokenEnTransition >= ryuLeft +120 )
{
  ryu.style.width = spriteBoundsRyu[1].width;
  ryu.style.backgroundImage = "url(img/"+spriteBoundsRyu[1].background+".gif)";
  hadoken.style.display = "none";
}

},1);

setTimeout(() => { hadoken.parentNode.removeChild(hadoken); clearInterval(interval);},1500 );

hadoken.style.bottom = (kenPosBottom + 320) + 'px';
document.body.appendChild(hadoken);
  };
  

  /********************** JUMP *********************/
function jump() {
  ken.classList.add('jump');
  ken.style.width = spriteBoundsKen[3].width;
  ken.style.backgroundImage = "url(img/" + spriteBoundsKen[3].background + ".gif)";
  
  setTimeout(function(){ ken.classList.add('down'); }, 1000);
  setTimeout(function(){ 

  ken.classList.remove('jump', 'down');
  ken.style.backgroundImage = "url(img/" + spriteBoundsKen[0].background + ".gif)";
  ken.style.width = spriteBoundsKen[0].width;
  ken.style.height = spriteBoundsKen[0].height;
  
  }, 1000);
  
};


  /********************** WALK BACK  *********************/

function walkLeft() {

  let kenPosition = document.querySelector('.ken');
    position = window.getComputedStyle(kenPosition);
    left = parseInt(position.getPropertyValue('left')) ;
  
  let newPos = left - 70;
  kenPosition.style.left = newPos+'px';


   

};



  /********************** WALK *********************/

function walkRight() {

  let kenPosition = document.querySelector('.ken');
    position = window.getComputedStyle(kenPosition);
    left = parseInt(position.getPropertyValue('left')) ;
  
  let newPos = left + 70;
  kenPosition.style.left = newPos+'px';


  

};








