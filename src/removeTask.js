import { plusAddTask } from "./plusAddTask"
import { displayTasks } from "./displayTasks"

export function removeTask(divContent, id) {

  const priority = document.querySelector("#ulTask").className
  const tasks = JSON.parse(localStorage.getItem("tasks"))

  for (const task in tasks) {
    if (tasks[task].id == id) {
      delete tasks[task]
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks))

  displayTasks(divContent, priority)
  const btnPlusAddTask = document.querySelector(".plus-add-task")
  divContent.removeChild(btnPlusAddTask)
  plusAddTask(divContent)
}