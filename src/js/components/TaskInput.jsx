import React from "react";

// Este componente sera el input donde el usuario escribe las tareas
//2da parte
const TaskInput = ({ inputValue, setInputValue, manejarEnter }) => {
    return (
        <input
            type="text"
            className="form-control mb-3"
            placeholder="Escribe tu tarea y presiona enter"
            value={inputValue} // Aquí guardaremos el texto actual del input
            onChange={(e) => setInputValue(e.target.value)} // Actualizamos el estado del input
            onKeyDown={manejarEnter} // Ejecutamos la función al presionar una tecla
        />
    );
};

export default TaskInput;