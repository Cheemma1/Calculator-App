
const toggle = document.getElementById('toogle');
const  body = document.querySelector('.container');
const text = document.getElementById('txt');
const tag =document.querySelector('.fa')
const input = document.getElementById('input')
toggle.addEventListener("click", function() {
    this.classList.toggle('fa-moon-o')
    if(this.classList.toggle('fa-sun-o')){
    body.style.background= " #ecf0f3";
    body.style.color=" #555";
    text.style.color =" black"
    tag.style.color =" black"
    input.style.color="black"
   body.style.transition= "2s"}
    else{
 body.style.background="black";
 body.style.color="white";
 text.style.color =" white";
tag.style.color =" white"
input.style.color="white"
     body.style.transition= "2s"
    }
})


// calculator
const sumEl = document.getElementById('input');

const insertNum = num => sumEl.textContent += num;

const equalTo = () =>(sumEl.textContent) ? sumEl.textContent = eval(sumEl.textContent) : false;

const eraseNum = () => sumEl.textContent=sumEl.textContent.substring(0, sumEl.textContent.length-1);

const clearInput = () => sumEl.textContent = '';