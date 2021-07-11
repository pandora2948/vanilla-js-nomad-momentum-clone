const dateDisplay = document.querySelector("h2#dateDisplay");
const clockDisplay = document.querySelector("h2#clockDisplay");

function handleClockDisplay() {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const hours = String(time.getHours()).padStart(2,'0');
  const minutes = String(time.getMinutes()).padStart(2,'0');
  const seconds = String(time.getSeconds()).padStart(2,'0');
  dateDisplay.textContent = (`${year}년 ${month}월 ${date}일`);
  clockDisplay.textContent = (`${hours} : ${minutes} : ${seconds}`);
}
handleClockDisplay();

setInterval(handleClockDisplay, 1000); 
