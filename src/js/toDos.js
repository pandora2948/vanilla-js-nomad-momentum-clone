const todoInput = document.querySelector("input#todoInput");
const todoForm = document.querySelector("form#todoForm");
const todoUl = document.querySelector("ul#todoUl");

const TODO_KEY = "todos";

let todos = [];

function todoSave() {
  localStorage.setItem(TODO_KEY,JSON.stringify(todos));
}

function deleteTodo(event) {
  const ereaseTodo = event.target.parentElement;
  ereaseTodo.remove();
  todos = todos.filter((toDo) => toDo.id !== parseInt(ereaseTodo.id));
  todoSave();
  const remainTodo = localStorage.getItem("todos");
  console.log(remainTodo);
  if (remainTodo === "[]") {
    console.log("ok");
    todoUl.classList.remove("todo__ul");
  }
}

function createTodo(newTodo) {
  const todoList = document.createElement("li");
  todoList.id = newTodo.id;
  todoList.classList.add("todo-list");
  todoUl.classList.add("todo__ul");
  const todoListSpan = document.createElement("span");
  todoListSpan.textContent = newTodo.text;
  const btn = document.createElement("button");
  btn.textContent = "X";
  btn.classList.add("delete-todo");
  btn.addEventListener("click",deleteTodo);
  todoList.appendChild(todoListSpan);
  todoList.appendChild(btn);
  todoUl.appendChild(todoList);
}

function handleSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObject);
  createTodo(newTodoObject);
  todoSave();
}

todoForm.addEventListener("submit",handleSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);

if(savedTodos !== null) {
  const parsedTodo = JSON.parse(savedTodos);
  todos = parsedTodo;
  parsedTodo.forEach(createTodo);
}

