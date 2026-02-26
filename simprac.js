gameseq=[];
userseq=[];

let btns = ["yellow","red","blue","green"];
 
let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
         console.log("game started");
         started=true;
         
    }
    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;

    let randindx=Math.floor(Math.random()*3);
    let randcolor=btns[randindx];
    let randBtn=document.querySelector(`.${randcolor}`);
    console.log(randindx);
    console.log(randcolor); 

    btnFlash(randBtn);
}

