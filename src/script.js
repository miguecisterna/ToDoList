import { addTask } from "./scripts/addTask.js";
import { displayTasks } from "./scripts/readTasks.js";

const btn = document.querySelector('[data-form-btn]');
//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);


displayTasks();