import { createButtonAddTask } from './createButtonAddTask.js'

export function createTaskForm(divContent) {
  const form = document.createElement("form")

  const inputTitle = document.createElement("input")
  inputTitle.id = "title"
  inputTitle.name = "title"
  inputTitle.placeholder = "What do you wanna do?"
  form.appendChild(inputTitle)

  const inputDesc = document.createElement("input")
  inputDesc.id = "description"
  inputDesc.name = "description"
  inputDesc.placeholder = "Give a description of it..."
  form.appendChild(inputDesc)

  const divForm = document.createElement("div")

  const inputDate = document.createElement("input")
  inputDate.id = "date"
  inputDate.name = "date"
  inputDate.type = "date"
  divForm.appendChild(inputDate)

  const selectPriority = document.createElement("select")
  selectPriority.id = "priority"
  selectPriority.name = "priority"

  const priorities = ["🔵Priority", "🔴Priority 1", "🟠Priority 2", "🟢Priority 3"]

  priorities.forEach(priority => {

  })

  divForm.appendChild(selectPriority)
  form.appendChild(divForm)

  divContent.appendChild(form)
}