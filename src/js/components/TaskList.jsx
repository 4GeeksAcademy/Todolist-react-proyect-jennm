import React from "react";
//aqui importamos el icono de basurero
import { TrashIcon } from "@primer/octicons-react";

// Este componente mostrará la lista de tareas y permitirá eliminarlas
// 3era parte que se ejecuta en el input
const TaskList = ({ tareas, eliminarTarea }) => {
    return (
        <ul className="list-group">
            {/* Si no hay tareas, mostramos un mensaje */}
            {tareas.length === 0 ? (
                <p className="text-muted">No hay tareas, añadir tareas✏️</p>
            ) : (

                // Aquí mostramos la lista de tareas
                tareas.map((tarea, index) => (
                    <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center tarea-item"
                    >
                        {tarea}

                        {/* Aquí se mostrará el icono de basurero para eliminar cada tarea */}
                        <button
                            className="btn btn-danger btn-sm eliminar-btn"
                            onClick={() => eliminarTarea(index)} // Eliminamos la tarea al hacer clic
                        >
                            {/* Aquí se mostrará el icono de papelera */}
                            <TrashIcon size={24} />
                        </button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default TaskList;