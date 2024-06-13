const countDay = document.getElementById("countDay");
const countHr = document.getElementById("countHr");
const countMin = document.getElementById("countMin");
const countSec = document.getElementById("countSec");
const startingDate = new Date().getTime();
const duration = 25 * 24 * 60 * 60 * 1000;
const endingDate = startingDate + duration;
setInterval(countDown, 1000);
countDown();

function countDown() {
  const now = new Date().getTime();
  let distance = endingDate - now;
  let dayForm = 24 * 60 * 60 * 1000;
  let hourForm = 60 * 60 * 1000;
  let secondForm = 60 * 1000;
  let milsecForm = 1000;

  let days = Math.floor(distance / dayForm);
  let hours = Math.floor((distance % dayForm) / hourForm);
  let minutes = Math.floor((distance % hourForm) / secondForm);
  let seconds = Math.floor((distance % secondForm) / milsecForm);

  countDay.textContent = days;
  countHr.textContent = hours;
  countMin.textContent = minutes;
  countSec.textContent = seconds;
}
