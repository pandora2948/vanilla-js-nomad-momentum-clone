const backGroundSection = document.querySelector("#backgroundImageSection");

const randomArray = [
  "0.png", "1.png", "2.png"];

function randomSelector() {
  const randomNumber = Math.floor(Math.random() * randomArray.length);
  const selectedColor = randomArray[randomNumber];
  const createImg = document.createElement("img");
  createImg.src = `/src/img/${randomNumber}.png`;
  createImg.classList.add("background-img");
  backGroundSection.appendChild(createImg);
}

randomSelector();