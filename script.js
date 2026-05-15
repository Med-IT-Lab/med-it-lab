const timeInput = document.querySelector("#time-input");
const timeButton = document.querySelector("#save-time");
const studyTime = document.querySelector("#study-time");

timeButton.addEventListener("click", function() {
    studyTime.textContent = timeInput.value;
    localStorage.setItem("studyTime",timeInput.value);
    const savedTime = localStorage.getItem("studyTime");
    studyTime.textContent = savedTime
});

const todoInput = document.querySelector("#input-to-do");
const todoButton = document.querySelector("#save-to-do");
const todaytodo = document.querySelector("#today-to-do");

todoButton.addEventListener("click", function() {
    todaytodo.textContent = todoInput.value;
});

const workInput = document.querySelector("#work-input");
const workButton = document.querySelector("#save-work");
const todayWork = document.querySelector("#today-work");

workButton.addEventListener("click", function() {
    todayWork.textContent = workInput.value;
});