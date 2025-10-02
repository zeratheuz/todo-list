import './style.css'
import { createButtonAddTask } from './createButtonAddTask.js'

const divContent = document.querySelector("#content")

const filters = Array.from(document.querySelectorAll(".filter"))
filters.forEach(filter => {
  filter.addEventListener("click", () => {
    displayTasks(divContent, filter.id)
    const buttonAddTask = document.querySelector(".add-task")
    divContent.removeChild(buttonAddTask)
    createButtonAddTask(divContent)
  })
})

export function displayTasks(divContent, filter = "allTasks") {
  const ulTask = document.querySelector("#ulTask")
  ulTask.innerHTML = ""
  Object.values(localStorage).forEach(value => {
    const task = JSON.parse(value)
    if (filter == task.priority || filter == "allTasks") {
      const liTask = document.createElement("li")
      switch (task.priority) {
        case 1:
          liTask.classList.add("green")
          break
        case 2:
          liTask.classList.add("orange")
          break
        case 3:
          liTask.classList.add("red")
          break
        default:
          liTask.classList.add("blue")
      }
      ulTask.appendChild(liTask)
      const taskCheck = document.createElement("input")
      taskCheck.type = "checkbox"
      taskCheck.id = task.id
      taskCheck.name = task.title
      taskCheck.addEventListener("mouseenter", () => {
        taskCheck.checked = true
      })
      taskCheck.addEventListener("mouseleave", () => {
        taskCheck.checked = false
      })
      taskCheck.addEventListener("click", () => {
        localStorage.removeItem(task.id)
        displayTasks(divContent)
        const buttonAddTask = document.querySelector(".add-task")
        divContent.removeChild(buttonAddTask)
        createButtonAddTask(divContent)
      })
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

displayTasks(divContent)

createButtonAddTask(divContent)