const character = ['Green', 'Yellow', 'Blue', 'Red'];
const color = ['Green', 'Yellow', 'Blue', 'Red'];

const greenBtn = document.getElementById('green-btn')
const yellowBtn = document.getElementById('yellow-btn')
const blueBtn = document.getElementById('blue-btn')
const redBtn = document.getElementById('red-btn')

const greenValue = greenBtn.value;
const yellowValue = yellowBtn.value;
const blueValue = blueBtn.value;
const redValue = redBtn.value;

const result = document.getElementById('score')

const question = document.getElementById('question')

window.addEventListener("DOMContentLoaded", function () {
    showQuestion()
})


let ans = '';
greenBtn.addEventListener('click', () => {
    ans = greenValue
    cheackAns()
    showNextQuestion()
    showQuestion()
})
yellowBtn.addEventListener('click', () => {
    ans = yellowValue
    cheackAns()
    showNextQuestion()
    showQuestion()
})
blueBtn.addEventListener('click', () => {
    ans = blueValue
    cheackAns()
    showNextQuestion()
    showQuestion()
})
redBtn.addEventListener('click', () => {
    ans = redValue
    cheackAns()
    showNextQuestion()
    showQuestion()
})


let currentChar = 0;
let currentCol = 0;

function showQuestion(){
    question.innerHTML = character[currentChar]
    question.style.color = color[currentCol]
}


function showNextQuestion(){
    currentChar = Math.floor(Math.random() * character.length);
    currentCol = Math.floor(Math.random() * color.length);
    showQuestion()
}


let score = 0;
function cheackAns(){
    if(ans === color[currentCol]){
        score = score + 5
        timeLeft = timeLeft + 2
        result.innerText = `SCORE : ${score}`

    } else if ( ans !== color[currentCol] ){
        score = score - 5
        timeLeft = timeLeft - 5
        result.innerText = `SCORE : ${score}`
    }
}


let timeLeft = 30;
const timer = document.getElementById('timer')

const timerId = setInterval(countDown, 1000)
function countDown(){

    if(timeLeft < 0){
        alert('Game Over')
        clearTimeout(timerId);
        timer.innerText = `Time : ${timeLeft = 0}`
        return ;

    }  else {
        timeLeft--;
        timer.innerText = `Time : ${timeLeft}`
    }
}



