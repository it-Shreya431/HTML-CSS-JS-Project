const rockBtn=document.querySelector('.rock-btn')
const paperBtn=document.querySelector('.paper-btn')
const scissorBtn=document.querySelector('.scissors-btn')
const userHand=document.querySelector('.user-hand .hand-icon')
const computerHand=document.querySelector('.computer-hand .hand-icon')
const rockIcon="✊"
const paperIcon="✋"
const scissorIcon="✌️"
const disResult=document.querySelector('.result')
const IconList=[rockIcon,paperIcon,scissorIcon]
const userScore=document.querySelector('.user-score')
const computerScore=document.querySelector('.computer-score')

function Game(selectedIcon,winningIcon){
    disResult.innerText=''
    userHand.innerText='🤜'
    computerHand.innerText='🤛'
    userHand.classList.add('shakeUserHands')
    computerHand.classList.add('shakeComputerHands')
    setTimeout(()=>{
        userHand.classList.remove('shakeUserHands')
        computerHand.classList.remove('shakeComputerHands')
        userHand.innerText=selectedIcon
        const computerChoice=Math.floor(Math.random()*3)
        computerHand.innerText=IconList[computerChoice]
        if(computerHand.innerText===userHand.innerText){
            disResult.innerText='Draw'
        }else if(computerHand.innerText===winningIcon){
            disResult.innerText='You Won!!'
            userScore.innerText= +userScore.innerText+1
        }
        else{
            disResult.innerText='Computer Won!!'
            computerScore.innerText= +computerScore.innerText+1
        }
        
    },1000)
}
rockBtn.addEventListener("click",()=>{
    Game(rockIcon,scissorIcon)
})
paperBtn.addEventListener("click",()=>{
    Game(paperIcon,rockIcon)
})
scissorBtn.addEventListener("click",()=>{
    Game(scissorIcon,paperIcon)
})

