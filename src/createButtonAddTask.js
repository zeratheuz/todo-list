import { createTaskForm } from './form.js'
import { displayTasks } from './displayTasks.js'

export function createButtonAddTask(divContent) {
  const buttonAddTask = document.createElement("button")

  buttonAddTask.classList.add("plus-add-task")
  buttonAddTask.textContent = "+ Add Task"
  buttonAddTask.addEventListener("click", () => {
    divContent.removeChild(buttonAddTask)
    const priority = document.querySelector("#ulTask").className
    displayTasks(divContent, priority)
    createTaskForm(divContent)
  })

  divContent.appendChild(buttonAddTask)
}