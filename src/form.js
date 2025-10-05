import { addTask } from './addTask.js'
import { createButtonAddTask } from './createButtonAddTask.js'
import { displayTasks } from './displayTasks.js'

export function createTaskForm(element, type = "add") {
  const form = document.createElement("form")
  form.id = `${type}Form`
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
    optPriority.id = `priority${index}`
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
    element.removeChild(form)
    if (type === "add") {
      createButtonAddTask(element)
    } else {
      displayTasks()
    }
  })
  divButtons.appendChild(buttonCancel)

  const buttonAddTask = document.createElement("button")
  buttonAddTask.classList.add("add-task")
  buttonAddTask.textContent = "Add Task"
  buttonAddTask.type = "submit"
  divButtons.appendChild(buttonAddTask)
  if (type === "add") {
    form.appendChild(divButtons)
  } else {
    divDatePriority.appendChild(divButtons)
  }

  element.appendChild(form)

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (type === "add") {
      addTask(element, form)
    } else {
      alert(28)
      // editTask(element, form)
    }
  })
}