import './style.css'
import { createButtonAddTask } from './createButtonAddTask.js'

const divMenu = document.querySelector("#menu")

const divContent = document.querySelector("#content")

export function displayTasks(divContent) {
  const ulTask = document.querySelector("#ulTask")
  ulTask.innerHTML = ""
  Object.values(localStorage).forEach(value => {
    const task = JSON.parse(value)
    const liTask = document.createElement("li")
    switch (task.priority) {
      case "1":
        liTask.classList.add("green")
        console.log(task.priority)
        break
      case "2":
        liTask.classList.add("orange")
        console.log(task.priority)
        break
      case "3":
        liTask.classList.add("red")
        console.log(task.priority)
        break
      default:
        liTask.classList.add("blue")
        console.log(task.priority)
    }
    ulTask.appendChild(liTask)
    const taskCheck = document.createElement("input")
    taskCheck.type = "checkbox"
    taskCheck.id = task.id
    taskCheck.name = task.title
    console.log(task.priority)
    taskCheck.addEventListener("mouseenter", () => {
      taskCheck.checked = true
    })
    taskCheck.addEventListener("mouseleave", () => {
      taskCheck.checked = false
    })
    taskCheck.addEventListener("click", () => {
      localStorage.removeItem(task.id)
      location.reload()
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
  })
}

displayTasks(divContent)

createButtonAddTask(divContent)