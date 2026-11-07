let sec=0;
let min=0;
let hr=0;
let timer=document.getElementById("time");
let started=false;
let inter=null;
function start(){
    if(started==true){
        return;
    }
    started=true;
    inter=setInterval(()=>{
        sec++;
        if(sec > 59){
            min++;
            sec=0;
        }
        if(min > 59){
            hr++;
            min=0;
        }
        timer.innerHTML = `${hr} : ${min} : ${sec}`;
    },1000)
}

function stop(){
    started=false;
    clearInterval(inter);
}

function reset(){
    started=false;
    clearInterval(inter);
    sec=0;min=0;hr=0;
    timer.innerHTML = `${hr} : ${min} : ${sec}`;
}