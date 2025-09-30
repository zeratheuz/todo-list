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
  inputDesc.id = "description"
  inputDesc.name = "description"
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

  const priorities = ["🔵Priority", "🔴Priority 1", "🟠Priority 2", "🟢Priority 3"]

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
        this.priority = priority,
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