const instruction=document.querySelector(".instruction");
const instructionButton=document.querySelector(".instruction-button");
const inputvalue=document.querySelector(".input");
const check=document.querySelector(".check");
const message=document.querySelector(".message");
const scoreboard=document.querySelector(".score");
const restart=document.querySelector(".restart");
const highest_score=document.querySelector(".highest_score")

instructionButton.addEventListener("click",()=>{
    instruction.classList.toggle("hidden")
})
function createrandomnumber(){
    return (Math.floor(Math.random()*100)+1)
}
let randomnumber=createrandomnumber();
console.log(randomnumber)
let score=20;
let highestscore=0;
let chances=10;

check.addEventListener("click",checking);
inputvalue.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        event.preventDefault();
        checking();
    }
});
function checking(){
    const input=Number(inputvalue.value);
    if(chances==0){
        message.innerHTML="sorry, you  can't guess the number";
        message.classList.add("wrong");
    }
    else if(input<randomnumber){
        message.innerHTML="your guess is low";
        message.classList.toggle("wrong");
        setTimeout(()=>{
            message.classList.toggle("wrong");
        },1000);
        score=score-2;
        chances--;
     scoreboard.innerHTML=`score:${score}`;

    }
    else if(input>randomnumber){
        message.innerHTML="your guess is high";
        message.classList.toggle("wrong");
        setTimeout(() => {
            message.classList.toggle("wrong");
        }, 1000);
        score=score-2;
        scoreboard.innerHTML=`score:${score}`;
        chances--;
    }
    else{
        message.innerHTML="congrats you got the number";
        message.classList.add("right");
        scoreboard.innerHTML=`score:${score}`;
        highest_score.innerHTML=`highest score:${score>highestscore?score:highestscore}`;
    }

}
restart.addEventListener("click",()=>{
    score=20;
    chances=10;
    randomnumber=createrandomnumber();
    console.log(randomnumber)

    scoreboard.innerHTML="score";
    
    message.innerHTML="you are again good to go";
    inputvalue.setAttribute("placeholder","0");
    message.classList.remove("wrong");
    message.classList.remove("right");


})


