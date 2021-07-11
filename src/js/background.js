const backGroundSection = document.querySelector("#backgroundImageSection");

const randomArray = [
  "#493a3e", "#585858", "#450d1b", "#f61b03"];

function randomSelector() {
  const randomNumber = Math.floor(Math.random() * randomArray.length);
  const selectedColor = randomArray[randomNumber];
  backGroundSection.style.backgroundColor = selectedColor;
}

randomSelector();