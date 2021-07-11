const userNameInput = document.querySelector("input#userNameInput");
const userNameSubmitForm = document.querySelector("form#userNameForm");
const userInfoWrap = document.querySelector("section#userInfoWrap");
const localStorage = window.localStorage;

function handleSubmitUserName(event) {
  event.preventDefault();
  handleDisplayUserName();
}

function handleDisplayUserName() {
  localStorage.setItem("Name",userNameInput.value);
  handleLocalStorage();
}

function handlehidden() {
  if(localStorage.getItem("Name") === null) {
    return;
  } else {
    userNameSubmitForm.classList.add("hidden");
  }
}

function handleWelcomeMessage() {
  const username = document.createElement("p","");
  userInfoWrap.appendChild(username);
  const displayParagraph = document.querySelector("#userInfoWrap p");
  displayParagraph.classList.add("username--appear");
  displayParagraph.textContent = `Welcome ${localStorage.getItem("Name")}`;
}

function handleLocalStorage() {
  if(localStorage.getItem("Name") === null) {
    return;
  } else {
    userNameSubmitForm.classList.toggle("fade-out");
    setTimeout(handlehidden,500);
    setTimeout(handleWelcomeMessage,500);
  }
}
userNameSubmitForm.addEventListener("submit",handleSubmitUserName);

handleLocalStorage();
handlehidden();