let gameSeq = [];
let userseq = [];

let btns = ["red", "yellow", "blue", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let body = document.querySelector("body");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

// function gameoverFlash(btn){
//     body.classList.add("gameover");
//     setTimeout(function() {
//         body.classList.remove("gameover");
//     },100);
// }

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randindx = Math.floor(Math.random() * 3);
    let randcolor = btns[randindx];
    let randBtn = document.querySelector(`.${randcolor}`)
    // console.log(randindx);
    // console.log(randcolor);
    // console.log(randBtn);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(indx) {
    // console.log("curr level : ", level);

    if (userseq[indx] === gameSeq[indx]) {
        if (userseq.length == gameSeq.length) {
            setTimeout(levelUp, 700);
        }
    } else {
        h2.innerHTML = `Game Over!<br>Your Score was <b>${level}</b> <br>Press any key to start.`;
        // gameoverFlash(btn);
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;
}