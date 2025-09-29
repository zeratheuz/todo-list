import './style.css'
import { createButtonAddTask } from './createButtonAddTask.js'

const divMenu = document.querySelector("#menu")

const divContent = document.querySelector("#content")

const tasks = []
window.tasks = tasks

class Task {
  constructor(title, desc, date, priority) {
    this.title = title,
      this.desc = desc,
      this.date = date,
      this.priority = priority,
      this.id = crypto.randomUUID()
  }
}
window.Task = Task

function displayTasks() {
  const ulTask = document.createElement("ul")
  tasks.forEach(task => {
    const liTask = document.createElement("li")
    ulTask.appendChild(liTask)
    const divTask = document.createElement("div")
    divTask.classList.add("task-details")
    liTask.appendChild(divTask)
    const taskCheck = document.createElement("input")
    taskCheck.type = "checkbox"
    taskCheck.id = task.id
    taskCheck.name = task.title
    divTask.appendChild(taskCheck)
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

tasks.push(new Task("Run", "just do it", "09/29/25", "2"))
tasks.push(new Task("Train", "Sharpen your skills", "09/30/25", "3"))
// tasks.push(new Task("Patrol", "Gotham needs you", "10/01/25", "2"))
// tasks.push(new Task("Investigate", "Track Joker's whereabouts", "10/02/25", "3"))
// tasks.push(new Task("Rest", "Even Batman needs sleep", "10/03/25", "1"))
// tasks.push(new Task("Upgrade Batmobile", "Install new AI system", "10/04/25", "2"))
// tasks.push(new Task("Interrogate", "Question suspects about Riddler", "10/05/25", "3"))
// tasks.push(new Task("Research", "Study new chemical compound", "10/06/25", "1"))
// tasks.push(new Task("Check Wayne Enterprises", "Board meeting", "10/07/25", "0"))
// tasks.push(new Task("Meet Gordon", "Discuss city intel", "10/08/25", "2"))

displayTasks()

createButtonAddTask(divContent)