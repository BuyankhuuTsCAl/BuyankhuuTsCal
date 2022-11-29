let bulb = document.getElementById("lightswitch");
bulb.onclick = light;

function light(){
    let background = document.body;
    
    if(background.style.background === "#A7C7E7"){
        background.style.background= "#000000";
    }else{
    background.style.background = "#A7C7E7";}
    bulb.style.transform = "scale(0)";
   
}

let time = 40;
let seconds = 40*60;
let timer = document.getElementById("timer")
function start(){
   
    setInterval(workTime,1000)
    document.body.style.animation ="backgroundchanger 2400s";
    
}



function workTime(){
    let minutes = Math.floor(seconds/60);
    let second = seconds%60;
    timer.innerHTML = minutes +  " : "+second;
    seconds--;
}
function rest(){
    setInterval(breakTime,1000)
}
let breaks = 20;
let breakSeconds = 20*60;
function breakTime(){
    let minutes = Math.floor(breakSeconds/60);
    let second = breakSeconds%60;
    timer.innerHTML = minutes +  " : "+second;
    seconds--;
}