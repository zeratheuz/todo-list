import { createButtonAddTask } from './createButtonAddTask.js'
import { displayTasks } from './displayTasks.js'
import { Task } from './Task.js'

export function addTask(divContent, form) {
  const taskData = new FormData(form)
  const taskObject = Object.fromEntries(taskData.entries())
  const task = new Task(taskObject)

  if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", "[]")
  }

  const tasks = JSON.parse(localStorage.getItem("tasks"))
  tasks.push(task)

  localStorage.setItem("tasks", JSON.stringify(tasks))
  divContent.removeChild(form)
  displayTasks(divContent)
  createButtonAddTask(divContent)
}