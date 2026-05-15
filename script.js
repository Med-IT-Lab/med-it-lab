const timeInput = document.querySelector("#time-input");
const timeButton = document.querySelector("#save-time");
const studyTime = document.querySelector("#study-time");

timeButton.addEventListener("click", function() {
    studyTime.textContent = timeInput.value;
});