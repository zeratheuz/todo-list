import './style.css'
import { createButtonAddTask } from './createButtonAddTask.js'

const divMenu = document.querySelector("#menu")

const divContent = document.querySelector("#content")
createButtonAddTask(divContent)

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

tasks.push(new Task("Run", "just do it", "09/29/25", "2"))
tasks.push(new Task("Train", "Sharpen your skills", "09/30/25", "3"))
tasks.push(new Task("Patrol", "Gotham needs you", "10/01/25", "2"))
tasks.push(new Task("Investigate", "Track Joker's whereabouts", "10/02/25", "3"))
tasks.push(new Task("Rest", "Even Batman needs sleep", "10/03/25", "1"))
tasks.push(new Task("Upgrade Batmobile", "Install new AI system", "10/04/25", "2"))
tasks.push(new Task("Interrogate", "Question suspects about Riddler", "10/05/25", "3"))
tasks.push(new Task("Research", "Study new chemical compound", "10/06/25", "1"))
tasks.push(new Task("Check Wayne Enterprises", "Board meeting", "10/07/25", "0"))
tasks.push(new Task("Meet Gordon", "Discuss city intel", "10/08/25", "2"))
