import { createTaskForm } from './form.js'
import { displayTasks } from './displayTasks.js'

export function plusAddTask(divContent) {
  const btnPlusAddTask = document.createElement("button")

  btnPlusAddTask.classList.add("plus-add-task")
  btnPlusAddTask.textContent = "+ Add Task"

  btnPlusAddTask.addEventListener("click", () => {
    divContent.removeChild(btnPlusAddTask)
    
    const priority = document.querySelector("#ulTask").className
    displayTasks(divContent, priority)
    createTaskForm(divContent)
  })

  divContent.appendChild(btnPlusAddTask)
}