let userScore=0;
let compScore=0;
let msz=document.querySelector("#msz");

const choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genComChoice=()=>{
    const  options=["stone", "paper", "scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
const drawGame=()=>{
    console.log("It's a draw");
    msz.innerText="It's a draw..";
    msz.style.backgroundColor="#E37383";
}
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("You win!");
        userScore++;
        userScorePara.innerText=userScore;
        msz.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msz.style.backgroundColor="#228B22";
    }
    else{
        console.log("You lose");
        compScore++;
        compScorePara.innerText=compScore;
        msz.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msz.style.backgroundColor= "#E0115F	";
    }
}
const playGame=(userChoice)=>{
    console.log("User choice is", userChoice);
    //generate computer choice-->modular
    const compChoice=genComChoice();
    console.log("Computer choice is", compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="stone"){
            if(compChoice==="paper"){userWin=false;}
        }
        else if(userChoice==="paper"){
            if(compChoice==="scissor"){userWin=false;}
        }
        else if(userChoice==="scissor"){
            if(compChoice==="stone"){userWin=false;}
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
});
