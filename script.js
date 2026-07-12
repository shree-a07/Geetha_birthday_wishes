
// Loader

window.onload=function(){

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},3000);


createStars();

};




// Stars

function createStars(){

for(let i=0;i<150;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*3+"s";


document.getElementById("sky").appendChild(star);

}

}






// Open Gift

function openGift(){


document.getElementById("intro").style.display="none";

document.getElementById("gift").style.display="none";


document.getElementById("letter").style.display="block";


let music=document.getElementById("music");

music.play();



heartRain();



// Letter time

setTimeout(()=>{

startClock();

},12000);


}







// Countdown

function startClock(){


document.getElementById("letter").style.display="none";


let clock=document.getElementById("clockBox");

clock.style.display="block";


let number=3;


let timer=setInterval(()=>{


document.getElementById("count").innerHTML=number;


number--;



if(number<0){


clearInterval(timer);


clock.style.display="none";


showMemories();


}


},1000);


}







// Memories


function showMemories(){


document.getElementById("gallery").style.display="block";


setTimeout(()=>{


document.getElementById("gallery").style.display="none";


document.getElementById("cake").style.display="block";


},8000);



setTimeout(()=>{


document.getElementById("candle").style.display="block";


},11000);



balloons();

roses();

butterflies();


}







// Heart Rain


function heartRain(){


for(let i=0;i<50;i++){


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"%";


heart.style.animationDuration=
(3+Math.random()*5)+"s";


document.body.appendChild(heart);


}


}







// Balloons


function balloons(){


for(let i=0;i<25;i++){


let balloon=document.createElement("div");


balloon.className="balloon";


balloon.innerHTML="🎈";


balloon.style.position="absolute";

balloon.style.left=Math.random()*100+"%";

balloon.style.bottom="-100px";

balloon.style.fontSize="50px";

balloon.style.animation="fly 6s linear infinite";


document.body.appendChild(balloon);


}

}







// Roses


function roses(){


for(let i=0;i<35;i++){


let rose=document.createElement("div");


rose.className="petals";


rose.innerHTML="🌹";


rose.style.position="absolute";

rose.style.left=Math.random()*100+"%";


rose.style.top="-20px";


rose.style.animation="petal 7s linear infinite";


document.body.appendChild(rose);


}

}








// Butterflies


function butterflies(){


for(let i=0;i<10;i++){


let butterfly=document.createElement("div");


butterfly.className="butterfly";


butterfly.innerHTML="🦋";


butterfly.style.position="absolute";

butterfly.style.left=Math.random()*100+"%";


document.body.appendChild(butterfly);


}

}








// Candle Blow


function blowCandle(){


document.getElementById("candle").innerHTML="💨";


fireworks();

heartRain();



setTimeout(()=>{


document.getElementById("finalScreen").style.display="block";


document.getElementById("finalScreen")
.classList.add("show");



},3000);




setTimeout(()=>{


document.getElementById("finalScreen").style.display="none";


document.getElementById("thankPage").style.display="block";


},10000);



}







// Fireworks


function fireworks(){


for(let i=0;i<40;i++){


let fire=document.createElement("div");


fire.innerHTML="🎆";


fire.style.position="absolute";


fire.style.fontSize="35px";


fire.style.left=Math.random()*100+"%";


fire.style.top=Math.random()*70+"%";


fire.style.animation="explode 2s";


document.body.appendChild(fire);



setTimeout(()=>{

fire.remove();

},2000);



}


}








// Music Control


let playing=false;


function musicControl(){


let music=document.getElementById("music");


if(playing){

music.pause();

}

else{

music.play();

}


playing=!playing;


}