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

localStorage.setItem(0, '{"id":0,"title":"Fix Batmobile","desc":"Perform full diagnostic and repairs.","date":"2025-10-01","priority":3}');
localStorage.setItem(1, '{"id":1,"title":"Night Patrol","desc":"Sweep Gotham from rooftops.","date":"2025-10-01","priority":2}');
localStorage.setItem(2, '{"id":2,"title":"Meet Gordon","desc":"Briefing at GCPD rooftop.","date":"2025-10-02","priority":1}');
localStorage.setItem(3, '{"id":3,"title":"Train with Robin","desc":"Combat drills and stealth exercises.","date":"2025-10-03","priority":2}');
localStorage.setItem(4, '{"id":4,"title":"Upgrade Batcave","desc":"Install new surveillance grid.","date":"2025-10-04","priority":1}');
localStorage.setItem(5, '{"id":5,"title":"Analyze Intel","desc":"Decrypt Penguin\'s communications.","date":"2025-10-05","priority":3}');
localStorage.setItem(6, '{"id":6,"title":"Stakeout at Docks","desc":"Monitor smuggling activity near pier 39.","date":"2025-10-06","priority":2}');
localStorage.setItem(7, '{"id":7,"title":"Recharge","desc":"Sleep (against Alfred’s advice to skip it).","date":"2025-10-07","priority":0}');