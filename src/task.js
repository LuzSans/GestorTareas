let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Función para levar las tareas
export const getTasks = () => tasks;

// Función para agregar una tarea
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    task.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}