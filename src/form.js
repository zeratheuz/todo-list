import { createButtonAddTask } from './createButtonAddTask.js'
import { displayTasks } from './index.js'

export function createTaskForm(divContent) {
  const form = document.createElement("form")
  form.id = "taskForm"
  form.method = "post"

  const inputTitle = document.createElement("input")
  inputTitle.type = "text"
  inputTitle.id = "title"
  inputTitle.name = "title"
  inputTitle.placeholder = "What do you wanna do?"
  form.appendChild(inputTitle)

  const inputDesc = document.createElement("input")
  inputDesc.type = "text"
  inputDesc.id = "desc"
  inputDesc.name = "desc"
  inputDesc.placeholder = "Give a description of it..."
  form.appendChild(inputDesc)

  const divDatePriority = document.createElement("div")
  divDatePriority.classList.add("date-priority")

  const inputDate = document.createElement("input")
  inputDate.id = "date"
  inputDate.name = "date"
  inputDate.type = "date"
  divDatePriority.appendChild(inputDate)

  const selectPriority = document.createElement("select")
  selectPriority.id = "priority"
  selectPriority.name = "priority"

  const priorities = ["🔵Priority", "🟢Priority 1", "🟠Priority 2", "🔴Priority 3"]

  priorities.forEach((priority, index) => {
    const optPriority = document.createElement("option")
    optPriority.textContent = priority
    optPriority.id = `priotiry${index}`
    optPriority.value = index
    if (index === 0) {
      optPriority.hidden = true
      optPriority.disabled = true
      optPriority.selected = true
    }
    selectPriority.appendChild(optPriority)
  })
  divDatePriority.appendChild(selectPriority)
  form.appendChild(divDatePriority)

  const divButtons = document.createElement("div")
  divButtons.classList.add("buttons")

  const buttonCancel = document.createElement("button")
  buttonCancel.classList.add("cancel")
  buttonCancel.textContent = "Cancel"
  buttonCancel.type = "button"
  buttonCancel.addEventListener("click", () => {
    divContent.removeChild(form)
    createButtonAddTask(divContent)
  })
  divButtons.appendChild(buttonCancel)

  const buttonAddTask = document.createElement("button")
  buttonAddTask.classList.add("add-task")
  buttonAddTask.textContent = "Add Task"
  buttonAddTask.type = "submit"
  divButtons.appendChild(buttonAddTask)
  form.appendChild(divButtons)

  divContent.appendChild(form)

  class Task {
    constructor({ title, desc, date, priority = 0 }) {
      this.title = title,
        this.desc = desc,
        this.date = date,
        this.priority = +priority,
        this.id = crypto.randomUUID()
    }
  }

  const taskForm = document.querySelector("#taskForm")
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const taskData = new FormData(form)
    const taskObject = Object.fromEntries(taskData.entries())
    const task = new Task(taskObject)
    localStorage.setItem(task.id, JSON.stringify(task))
    divContent.removeChild(form)
    displayTasks(divContent)
    createButtonAddTask(divContent)
  })
}

localStorage.setItem(0, '{"id":0,"title":"Fix Batmobile","desc":"Run full diagnostics and install armor upgrades.","date":"2025-10-01","priority":3}');
localStorage.setItem(1, '{"id":1,"title":"Night Patrol","desc":"Sweep Gotham\'s East End for unusual activity.","date":"2025-10-02","priority":2}');
localStorage.setItem(2, '{"id":2,"title":"Meet Gordon","desc":"Exchange intel on Two-Face sightings.","date":"2025-10-03","priority":1}');
localStorage.setItem(3, '{"id":3,"title":"Recharge","desc":"Rest after extended missions. Alfred\'s orders.","date":"2025-10-04","priority":0}');
localStorage.setItem(4, '{"id":4,"title":"Intel Analysis","desc":"Decrypt the Joker\'s encrypted radio signals.","date":"2025-10-05","priority":3}');
localStorage.setItem(5, '{"id":5,"title":"Stakeout at Docks","desc":"Track shipment movements linked to Penguin.","date":"2025-10-06","priority":2}');
localStorage.setItem(6, '{"id":6,"title":"Train with Robin","desc":"Tactical simulation in the Batcave.","date":"2025-10-07","priority":1}');
localStorage.setItem(7, '{"id":7,"title":"System Maintenance","desc":"Update Batcomputer firmware and backups.","date":"2025-10-08","priority":0}');