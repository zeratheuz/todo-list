import { Task } from './Task.js'
import { plusAddTask } from './plusAddTask.js'
import { displayTasks } from './displayTasks.js'

export function addTask(element, form) {
  const taskData = new FormData(form)
  const taskObject = Object.fromEntries(taskData.entries())
  const task = new Task(taskObject)

  if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", "{}")
  }

  const tasks = JSON.parse(localStorage.getItem("tasks"))
  tasks[task.id] = task

  localStorage.setItem("tasks", JSON.stringify(tasks))
  element.removeChild(form)
  displayTasks(element)
  plusAddTask(element)
}