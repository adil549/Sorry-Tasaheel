/* ==========================================
   A LETTER I COULDN'T SAY ❤️
========================================== */

// Typing Effect

const typing = document.getElementById("typing");

const title =
"Dear Tasaheel... ❤️";

let i = 0;

function type(){

    if(i < title.length){

        typing.innerHTML += title.charAt(i);

        i++;

        setTimeout(type,120);

    }

}

type();


// ==========================================
// STARS
// ==========================================

const stars = document.getElementById("stars");

for(let i=0;i<250;i++){

    const star=document.createElement("span");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*5+"s";

    star.style.animationDuration=
    (2+Math.random()*5)+"s";

    stars.appendChild(star);

}


// ==========================================
// FLOATING HEARTS
// ==========================================

const heartBox=document.getElementById("hearts");

setInterval(()=>{

const heart=document.createElement("div");

heart.className="floatingHeart";

heart.innerHTML=Math.random()>0.5?"❤️":"💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(20+Math.random()*20)+"px";

heart.style.animationDuration=
(5+Math.random()*6)+"s";

heartBox.appendChild(heart);

setTimeout(()=>{

heart.remove();

},11000);

},400);


// ==========================================
// CONTINUE BUTTON
// ==========================================

document
.getElementById("startBtn")
.onclick=()=>{

document
.getElementById("letter")
.scrollIntoView({

behavior:"smooth"

});

};


// ==========================================
// LETTER
// ==========================================

const envelope=document.getElementById("envelope");
const letterCard=document.getElementById("letterCard");
const letterText=document.getElementById("letterText");
const msg=`I know one simple "Sorry" can't change everything.

If I ever hurt you, I'm truly sorry.

I hope one day you'll smile again.

— Adil ❤️`;

envelope.onclick = () => {
    envelope.style.display = "none";
    letterCard.style.display = "block";
    letterText.innerHTML = "";
    document.getElementById("letterContinue").style.display="none";
    let i=0;
    function type(){
        if(i<msg.length){
            letterText.innerHTML += msg.charAt(i++);
            setTimeout(type,30);
        }else{
            document.getElementById("letterContinue").style.display="inline-block";
        }
    }
    type();
};

// ==========================================
// EVERY LINE
// ==========================================

const lineContainer =
document.getElementById("lineContainer");

const apologyLines=[

"❤️ Sorry, Tasaheel.",

"🥺 I never wanted to hurt you.",

"🌸 I truly regret my mistake.",

"💙 If I could go back, I would.",

"🤍 You deserve kindness.",

"🕊️ Please forgive me.",

"🌹 Every apology comes from my heart.",

"✨ I still wish you smile today.",

"💌 Thank you for reading.",

"🌙 You matter more than you know.",

"🌼 I respect you.",

"❤️ This apology is real."

];

for(let i=0;i<10000;i++){

const div=document.createElement("div");

div.className="line";

div.innerHTML=
apologyLines[Math.floor(Math.random()*apologyLines.length)];

div.style.color=
`hsl(${Math.random()*360},80%,80%)`;

lineContainer.appendChild(div);

}

document.getElementById("gameBtn").onclick=()=>{

document.getElementById("game")
.scrollIntoView({

behavior:"smooth"

});

};
// ==========================================
// COUPLE GAME
// ==========================================

const heartGrid=document.getElementById("heartGrid");

const result=document.getElementById("gameResult");

const loveFill=document.getElementById("loveFill");

const openHeartBtn=document.getElementById("openHeartBtn");

const correct=Math.floor(Math.random()*9);

for(let i=0;i<9;i++){

const h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.onclick=()=>{

if(i===correct){

h.innerHTML="💖";

result.innerHTML="💖 You found my heart.";

loveFill.style.width="100%";

openHeartBtn.style.display="inline-block";

}else{

h.innerHTML="🖤";

result.innerHTML="🥺 Not this one...";

loveFill.style.width="30%";

}

};

heartGrid.appendChild(h);

}
// ==========================================
// FINAL HEART
// ==========================================

const openHeart =
document.getElementById("openHeartBtn");

openHeart.onclick=()=>{

document
.getElementById("finalScene")
.scrollIntoView({

behavior:"smooth"

});

};

const heartContainer =
document.getElementById("heartContainer");
const finalLetter=
document.getElementById("finalLetter");

heartContainer.onclick=()=>{

heartContainer.classList.add("open");

launchFireworks();

setTimeout(()=>{

finalLetter.style.display="block";

},1000);

};
function launchFireworks(){

for(let i=0;i<120;i++){

const p=document.createElement("div");

p.style.position="fixed";

p.style.left="50%";

p.style.top="50%";

p.style.width="8px";

p.style.height="8px";

p.style.borderRadius="50%";

p.style.background=
`hsl(${Math.random()*360},100%,60%)`;

p.style.zIndex="9999";

document.body.appendChild(p);

const x=(Math.random()-0.5)*900;

const y=(Math.random()-0.5)*900;

p.animate([

{

transform:"translate(0,0)",

opacity:1

},

{

transform:`translate(${x}px,${y}px)`,

opacity:0

}

],{

duration:1800

});

setTimeout(()=>{

p.remove();

},1800);

}

}
// ==========================================
// MUSIC
// ==========================================

const music=
document.getElementById("bgMusic");

const musicBtn=
document.getElementById("musicButton");

musicBtn.onclick=()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="🔇";

}else{

music.pause();

musicBtn.innerHTML="🎵";

}

};


// ==========================================
// PROGRESS BAR
// ==========================================

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-

window.innerHeight;

const current=

(window.scrollY/total)*100;

document.getElementById("progressBar").style.width=

current+"%";

});


// ==========================================
// ROSE PETALS
// ==========================================

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=

(20+Math.random()*20)+"px";

petal.style.animationDuration=

(6+Math.random()*5)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

},800);
// ==========================================
// LOADER
// ==========================================

window.addEventListener("load",()=>{
 const ld=document.getElementById("loader");


setTimeout(()=>{

if(ld) ld.style.opacity="0";

setTimeout(()=>{

if(ld) ld.style.display="none";

},1000);

},2500);

});

const __letterBtn=document.getElementById("letterContinue");
if(__letterBtn){
 __letterBtn.onclick=()=>{
   const sec=document.getElementById("everyLine");
   if(sec) sec.scrollIntoView({behavior:"smooth"});
 };
}


const __ps=document.getElementById('passwordScreen');
const __btn=document.getElementById('unlockBtn');
const __inp=document.getElementById('passwordInput');
const __msg=document.getElementById('passMsg');
function unlock(){if(__inp.value==='Imaaheel'){__ps.style.display='none';}else{__msg.textContent='Incorrect Password 💔';}}
if(__btn)__btn.onclick=unlock;
if(__inp)__inp.addEventListener('keydown',e=>{if(e.key==='Enter')unlock();});

function showPopup(){const p=document.getElementById('wrongPopup');if(p)p.style.display='flex';}
function closePopup(){const p=document.getElementById('wrongPopup');if(p)p.style.display='none';}
