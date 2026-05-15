const input = document.querySelector("#study-time");
const button = document.querySelector("#save-button");
const studyTime = document.querySelector("#study-time");

button.addEventListener("click", function() {
    studyTime.textContent = input.value;
});

const input = document.querySelector("#today-work");
const button = document.querySelector("#save-button");
const todayWork = document.querySelector("#today-work");

button.addEventListener("click", function() {
    todayWork.textContent = input.value;
});