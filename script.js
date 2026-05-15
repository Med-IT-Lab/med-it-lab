const input = document.querySelector("#time-input");
const button = document.querySelector("#save-time");
const studyTime = document.querySelector("#study-time");

button.addEventListener("click", function() {
    studyTime.textContent = input.value;
});

const input = document.querySelector("#work-input");
const button = document.querySelector("#save-work");
const todayWork = document.querySelector("#today-work");

button.addEventListener("click", function() {
    todayWork.textContent = input.value;
});

const input = document.querySelector("#input-to-do");
const button = document.querySelector("#save-to-do");
const studyTime = document.querySelector("#today-to-do");

button.addEventListener("click", function() {
    studyTime.textContent = input.value;
});