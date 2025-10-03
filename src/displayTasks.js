import { createButtonAddTask } from "./createButtonAddTask"
import { removeTask } from "./removeTask"

export function displayTasks(divContent, filter = "allTasks") {

  const ulTask = document.querySelector("#ulTask")
  ulTask.innerHTML = ""

  if (localStorage.getItem("tasks")) {

    const tasks = JSON.parse(localStorage.getItem("tasks"))

    tasks.forEach(task => {

      if (filter == task.priority || filter == "allTasks") {

        const liTask = document.createElement("li")

        const PRIORITY = {
          0: "neutral",
          1: "low",
          2: "mid",
          3: "high"
        }

        liTask.classList.add(PRIORITY[task.priority])
        ulTask.appendChild(liTask)

        const taskCheck = document.createElement("input")
        taskCheck.type = "checkbox"
        taskCheck.id = task.id
        taskCheck.name = task.title

        taskCheck.addEventListener("mouseenter", () => { taskCheck.checked = true })
        taskCheck.addEventListener("mouseleave", () => { taskCheck.checked = false })

        taskCheck.addEventListener("click", () => { removeTask(divContent, task.id) })

        liTask.appendChild(taskCheck)

        const divTask = document.createElement("div")
        divTask.classList.add("task-details")
        liTask.appendChild(divTask)

        const taskTitle = document.createElement("h3")
        taskTitle.textContent = task.title
        divTask.appendChild(taskTitle)

        const taskDesc = document.createElement("p")
        taskDesc.textContent = task.desc
        divTask.appendChild(taskDesc)

        const taskDate = document.createElement("h4")
        taskDate.textContent = task.date
        divTask.appendChild(taskDate)

        divContent.appendChild(ulTask)
      }
    })
  }
}