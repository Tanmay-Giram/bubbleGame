var timer=60;
var score=0;
var hitrn;
function makeBubble(){
    var clutter="";

    for(var i=0; i<70; i++) {
        var rn=Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML=clutter;
}

function hitmaker(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").innerHTML=hitrn;
}

function SetTimer(){
    interval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").innerHTML=timer;
        }else{
            clearInterval(interval);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
    },1000);
}

function setScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum=Number(dets.target.textContent);
    if(clickedNum==hitrn){
        setScore();
        makeBubble();
        hitmaker();
    }
});

makeBubble();
hitmaker();
SetTimer();

