export function createButtonAddTask() {
  console.log("TEST")
  const divContent = document.querySelector("#content")
  const buttonAddTask = document.createElement("button")

  buttonAddTask.classList.add("add-task")
  buttonAddTask.textContent = "+ Add Task"
  divContent.appendChild(buttonAddTask)
}