import { createButtonAddTask } from './createButtonAddTask.js'
import { displayTasks } from './displayTasks.js'
import { Task } from './Task.js'

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
  displayTasks(divContent)

  const buttonAddTask = document.querySelector(".add-task")
  divContent.removeChild(buttonAddTask)

  createButtonAddTask(divContent)
}