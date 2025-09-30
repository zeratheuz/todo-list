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
    ulTask.appendChild(liTask)
    const taskCheck = document.createElement("input")
    taskCheck.type = "checkbox"
    taskCheck.id = task.id
    taskCheck.name = task.title
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