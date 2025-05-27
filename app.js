document.addEventListener("DOMContentLoaded", loadTask);

function createTask() {
  const input = document.getElementById("addText");
  const inputValue = input.value.trim();

  if (inputValue === "") {
    alert("Please enter a task");
    return;
  }

  const task = { text: inputValue, done: false };
  addTask(task);
  saveTask(task);

  input.value = "";
}

function addTask(task) {
  const newLine = document.createElement("li");
  newLine.addEventListener("click", (event) => {
    // Prevent toggling if clicking the checkbox or delete button
    if (
      event.target.tagName.toLowerCase() !== "input" &&
      event.target.tagName.toLowerCase() !== "button"
    ) {
      checkbox.click();
    }
  });

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("task-checkbox");
  checkbox.checked = task.done;
  checkbox.addEventListener("change", () => {
    task.done = checkbox.checked;
    updateTask();
    newLine.classList.toggle("done", task.done);
  });

  const span = document.createElement("span");
  span.textContent = task.text;
  span.addEventListener("click", () => {
    checkbox.click();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "\u00D7";
  deleteBtn.addEventListener("click", () => {
    newLine.remove();
    deleteTask(task);
  });

  newLine.appendChild(checkbox);
  newLine.appendChild(span);
  newLine.appendChild(deleteBtn);

  document.getElementById("tList").appendChild(newLine);
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(taskToDelete) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updated = tasks.filter((task) => task.text !== taskToDelete.text);
  localStorage.setItem("tasks", JSON.stringify(updated));
}

function updateTask() {
  const listItems = document.querySelectorAll("#tList li");
  const tasks = Array.from(listItems).map((li) => ({
    text: li.querySelector("span").textContent,
    done: li.querySelector("input[type='checkbox']").checked,
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTask() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    addTask(task);
  });
}
