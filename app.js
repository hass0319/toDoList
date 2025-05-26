document.addEventListener("DOMContentLoaded", loadTask);

function createTask() {
  const input = document.getElementById("addText");
  const inputValue = input.value.trim();

  if (inputValue === "") {
    alert("Please enter a task");
    return;
  }

  addTaskToDom(inputValue);
  saveTask(inputValue);

  input.value = "";
}

function addTaskToDom(text) {
  let newLine = document.createElement("li");
  let newTask = document.createTextNode(text);

  newLine.appendChild(newTask);
  document.getElementById("tList").appendChild(newLine);
}

function saveTask(text) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(text);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTask() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    addTaskToDom(task);
  });
}

let line = getElementByTagName("li");

for (let i = 0; i < line.length; i++) {
  let x = documnet.createTextNode("\u00D7");
  let;
}
