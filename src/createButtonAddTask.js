import { createTaskForm } from './form.js'

export function createButtonAddTask(divContent) {
  const buttonAddTask = document.createElement("button")

  buttonAddTask.classList.add("add-task")
  buttonAddTask.textContent = "+ Add Task"
  buttonAddTask.addEventListener("click", () => {
    divContent.removeChild(buttonAddTask)
    createTaskForm(divContent)
  })

  divContent.appendChild(buttonAddTask)
}