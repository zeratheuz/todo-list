import { createButtonAddTask } from "./createButtonAddTask"

export function displayTasks(divContent, filter = "allTasks") {

  const ulTask = document.querySelector("#ulTask")
  ulTask.innerHTML = ""

  Object.values(localStorage).forEach(value => {
    const task = JSON.parse(value)
    if (filter == task.priority || filter == "allTasks") {
      const liTask = document.createElement("li")

      const priorityColors = {
        0: "blue",
        1: "green",
        2: "orange",
        3: "red"
      }

      liTask.classList.add(priorityColors[task.priority])

      ulTask.appendChild(liTask)

      const taskCheck = document.createElement("input")
      taskCheck.type = "checkbox"
      taskCheck.id = task.id
      taskCheck.name = task.title

      taskCheck.addEventListener("mouseenter", () => { taskCheck.checked = true })
      taskCheck.addEventListener("mouseleave", () => { taskCheck.checked = false })

      taskCheck.addEventListener("click", () => {
        localStorage.removeItem(task.id)
        displayTasks(divContent)
        const buttonAddTask = document.querySelector(".add-task")
        divContent.removeChild(buttonAddTask)
        createButtonAddTask(divContent)
      })

      liTask.appendChild(taskCheck)

      const divTask = document.createElement("div")
      divTask.classList.add("task-details")
      liTask.appendChild(divTask)

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
    }
  })
}