import { createButtonAddTask } from "./createButtonAddTask"
import { displayTasks } from "./displayTasks"

export function removeTask(divContent, id) {

  const tasks = JSON.parse(localStorage.getItem("tasks"))
  console.table(tasks)
  const index = tasks.findIndex(task => task.id == id)
  tasks.splice(index, 1)
  console.table(tasks)

  localStorage.setItem("tasks", JSON.stringify(tasks))

  displayTasks(divContent)
  const buttonAddTask = document.querySelector(".add-task")
  divContent.removeChild(buttonAddTask)
  createButtonAddTask(divContent)
}