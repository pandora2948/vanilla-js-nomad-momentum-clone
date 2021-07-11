const backGroundSection = document.querySelector("#backgroundImageSection");

const randomArray = [
  "#493a3e", "##423a3c", "#450d1b", "#653843"];

function randomSelector() {
  const randomNumber = Math.floor(Math.random() * randomArray.length);
  const selectedColor = randomArray[randomNumber];
  backGroundSection.style.backgroundColor = selectedColor;
}

randomSelector();