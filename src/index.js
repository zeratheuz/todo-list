import './style.css'
import { createButtonAddTask } from './createButtonAddTask.js'

const divMenu = document.querySelector("#menu")

const divContent = document.querySelector("#content")
createButtonAddTask(divContent)