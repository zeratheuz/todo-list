import { createButtonAddTask } from './createButtonAddTask.js'
import { displayTasks } from './displayTasks.js'
import { Task } from './Task.js'

export function editTask(element, form, idTask) {
  const taskData = new FormData(form)
  const taskObject = Object.fromEntries(taskData.entries())
  const editedTask = new Task(taskObject)

  const tasks = JSON.parse(localStorage.getItem("tasks"))

  for (const task in tasks) {
    if (tasks[task].id == idTask) {
      tasks[task] = editedTask
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks))
  element.removeChild(form)
  displayTasks(element)
  createButtonAddTask(element)
}