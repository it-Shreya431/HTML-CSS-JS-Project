const userInput=document.querySelector('.user-input')
const form=document.querySelector('form')
const result=document.querySelector('.result')
const allGuesses=document.querySelector('.all-guesses')
const Submit=document.querySelector('.submit-btn')
const startGameBtn=document.querySelector('.start-game')
const allGuessesArray=[]
let randomNumber=Math.round(Math.random()*100)
;(function (){
    form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const userInputValue=parseInt(userInput.value)
    if(userInputValue<randomNumber){
        result.innerText='Too low!'
    } else if(userInputValue>randomNumber){
        result.innerText='Too High!!'
    } else 
        result.innerText='Congrats!!!'
        startGameBtn.disabled=false
        Submit.disabled=true
    allGuessesArray.push(userInputValue)
    allGuesses.innerText='Your Guesses : '+allGuessesArray.join(', ')
    form.reset();
})
startGameBtn.addEventListener('click',()=>{
    result.innerText=''
    allGuesses.innerText=''
    startGameBtn.disabled=true
    Submit.disabled=false
    randomNumber=Math.round(Math.random()*100)
})
})()
