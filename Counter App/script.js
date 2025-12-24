const count=document.querySelector('.count')
const decrement=document.querySelector('.decre')
const increment=document.querySelector('.incre')
const changeBy=document.querySelector('.changeBy')
const resetBtn=document.querySelector('.resetBtn')
increment.addEventListener('click',()=>{
    const countValue=parseInt(count.innerText);
    const changeByValue=parseInt(changeBy.value)
    count.innerText=countValue+changeByValue;
})
decrement.addEventListener('click',()=>{
    const countValue=parseInt(count.innerText);
    const changeByValue=parseInt(changeBy.value)
    count.innerText=countValue-changeByValue;
})
resetBtn.addEventListener('click',()=>{
    count.innerText=0;
})