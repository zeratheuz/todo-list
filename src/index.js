import './style.css'
import { displayTasks } from './displayTasks.js'
import { createDefaultTasks } from './defaultTasks.js'
import { plusAddTask } from './plusAddTask.js'

createDefaultTasks()

const divContent = document.querySelector("#content")
const filters = Array.from(document.querySelectorAll(".filter"))

filters.forEach(filter => {
  filter.addEventListener("click", () => {

    displayTasks(divContent, filter.id)

    const ulTask = document.querySelector("#ulTask")
    ulTask.className = ""
    ulTask.classList.add(filter.id)

    const btnPlusAddTask = document.querySelector(".plus-add-task")
    console.log(btnPlusAddTask)
    if (btnPlusAddTask) {
      divContent.removeChild(btnPlusAddTask)
    }

    const form = document.querySelector("form")
    if (form) {
      divContent.removeChild(form)
    }

    plusAddTask(divContent)
  })
})

displayTasks(divContent)

plusAddTask(divContent)