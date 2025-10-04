import { createButtonAddTask } from "./createButtonAddTask"
import { displayTasks } from "./displayTasks"

export function removeTask(divContent, id) {

  const priority = document.querySelector("#ulTask").className
  const tasks = JSON.parse(localStorage.getItem("tasks"))
  const index = tasks.findIndex(task => task.id == id)
  tasks.splice(index, 1)

  localStorage.setItem("tasks", JSON.stringify(tasks))

  displayTasks(divContent, priority)
  const buttonAddTask = document.querySelector(".add-task")
  divContent.removeChild(buttonAddTask)
  createButtonAddTask(divContent)
}