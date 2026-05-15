const timeInput = document.querySelector("#time-input");
const timeButton = document.querySelector("#save-time");
const studyTime = document.querySelector("#study-time");

const savedTime = localStorage.getItem("studyTime");

const studyHistory = [];
timeButton.addEventListener("click",function(){
    studyHistory.push(timeInput.value);
    studyTime.textContent = studyHistory;
})

studyTime.textContent = savedTime

timeButton.addEventListener("click", function() {
    studyTime.textContent = timeInput.value;
    localStorage.setItem("studyTime",timeInput.value);
});

const todoInput = document.querySelector("#input-to-do");
const todoButton = document.querySelector("#save-to-do");
const todaytodo = document.querySelector("#today-to-do");

const savedtodo=localStorage.getItem("todaytodo");

todaytodo.textContent = savedtodo

todoButton.addEventListener("click", function() {
    todaytodo.textContent = todoInput.value;
    localStorage.setItem("todaytodo",todoInput.value);
});

const workInput = document.querySelector("#work-input");
const workButton = document.querySelector("#save-work");
const todayWork = document.querySelector("#today-work");

const savedwork = localStorage.getItem("todaywork")

todayWork.textContent = savedwork

workButton.addEventListener("click", function() {
    todayWork.textContent = workInput.value;
    localStorage.setItem("todaywork",workInput.value);
});