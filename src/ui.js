// Importar la función paara traer las tareas del Local Storage
import { getTasks } from "./task";

// Funció para visualizar las tareas
export const renderTasks = () => {
    const taskList = document.getElementById("task-list"); //TaskList es el elemento vacío de HTML
    taskList.innerHTML = ""; // Ayuda a limpiar el "taskList"
    const task = getTasks (); //Traer las tareas del LocalStorage
    task.forEach((task) => {
        const li = document.createElement("li");

        li.setAttribute("data-id", task.id);
        if (task.completed === true) {
            li.classList.add("completed");
        }

        li.innerHTML = `
        ${task.text}
            <button class= "delete"> Borrar </button>
            <button class= "toggle"> ${task.completed === true ? "Regresar" : "Completado" } </button>
        `;

        taskList.appendChild(li);
    
    });
};