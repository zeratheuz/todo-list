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
  divButtons.appendChild(buttonCancel)

  const buttonAddTask = document.createElement("button")
  buttonAddTask.classList.add("add-task")
  buttonAddTask.textContent = "Add Task"
  divButtons.appendChild(buttonAddTask)
  form.appendChild(divButtons)

  divContent.appendChild(form)
}