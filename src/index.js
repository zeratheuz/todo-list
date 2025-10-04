import './style.css'
import { displayTasks } from './displayTasks.js'
import { createDefaultTasks } from './defaultTasks.js'
import { createButtonAddTask } from './createButtonAddTask.js'

createDefaultTasks()

const divContent = document.querySelector("#content")
const filters = Array.from(document.querySelectorAll(".filter"))

filters.forEach(filter => {
  filter.addEventListener("click", () => {

    displayTasks(divContent, filter.id)

    const ulTask = document.querySelector("#ulTask")
    ulTask.className = ""
    ulTask.classList.add(filter.id)

    const buttonAddTask = document.querySelector(".add-task")
    divContent.removeChild(buttonAddTask)

    createButtonAddTask(divContent)
  })
})

displayTasks(divContent)

createButtonAddTask(divContent)