import { useState } from 'react'
import { addTask } from "./scripts/addTask.js";
import { displayTasks } from "./scripts/readTasks.js";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  if(document.querySelector('[data-form-btn]')){
    const btn = document.querySelector('[data-form-btn]');
    //Arrow functions o funciones anonimas
    btn.addEventListener('click', addTask);
    displayTasks();
  }

  displayTasks();

  return (
    <>
      <main>
      <div className="mainCard">
        <div className="title"><img src="/img/rocket.svg" /></div>
        <div>
          <form action="">
            <input
              type="text"
              name="task"
              placeholder="Nombre de la tarea"
              className="inputForm"
              autoComplete="off"
              data-form-input
            />
            <input type="datetime-local"
            placeholder="YYYY/MM/DD"
            data-form-date
            />
            <button type="submit" className="btnCreate" data-form-btn>
              Agregar <i className="fas fa-plus-circle"></i>
            </button>
          </form>
        </div>
        <ul className="cardsList" data-list>
        </ul>
      </div>
    </main>
    </>
  )
}

export default App
