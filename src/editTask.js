import { Task } from './Task.js'
import { plusAddTask } from './plusAddTask.js'
import { displayTasks } from './displayTasks.js'

export function editTask(element, form, idTask) {
  const taskData = new FormData(form)
  const taskObject = Object.fromEntries(taskData.entries())
  const editedTask = new Task(taskObject)
  editedTask.id = idTask

  const tasks = JSON.parse(localStorage.getItem("tasks"))

  tasks[idTask] = editedTask

  localStorage.setItem("tasks", JSON.stringify(tasks))
  element.removeChild(form)

  const divContent = document.querySelector("#content")
  const priority = document.querySelector("#ulTask").className
  displayTasks(divContent, priority)

  const btnPlusAddTask = document.querySelector(".plus-add-task")
  divContent.removeChild(btnPlusAddTask)

  plusAddTask(divContent)
}