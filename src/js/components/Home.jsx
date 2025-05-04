import React, { useState } from "react";
// aqui importamos todos los componentes 
import Header from "./Header";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import Footer from "./Footer";
//importamos para el icono de basurero
import { TrashIcon } from '@primer/octicons-react'


//componente principal Home
const Home = () => {
	//Aqui el usuario va a escribir (darle valores al input)
	const [inputValue, setInputValue] = useState("");

	//aqui gaurdaremos las tareas como un array de string 
	const [tareas, setTareas] = useState([]);

	//funcion se ejecuta cuando se presiona una tecla
	const manejarEnter = (e) => {
		if (e.key === "Enter") {

			//pero si el input sigue vacio, no se agrega nada
			if (inputValue.trim() === "") return;

			//aqui ahora agregamos la tarea al array
			setTareas([...tareas, inputValue]);

			//luego se volvera a limpiar el input
			setInputValue("");
		}
	};

	//esta funcion me ayudara a eliminar la tarea manualmente
	const eliminarTarea = (index) => {
		const nuevasTareas = tareas.filter((_, i) => i !== index);
		setTareas(nuevasTareas);
	};


	return (
		<div className="row justify-content-center">
			<div className="col-md-6 text-center">
				{/* aqui va el omponente Header */}
				<Header />

				{/* aqui va el componente input para agregar las tareas */}
				<TaskInput
					inputValue={inputValue}
                    setInputValue={setInputValue}
                    manejarEnter={manejarEnter}
				/>

				{/* Aqui va el componente de List */}
				{/* y mostramos la lista de tareas y adicional borrarlas */}
                <TaskList tareas={tareas} eliminarTarea={eliminarTarea} />
            </div>

            {/* Aqui mostramos el footer "sello personal" */}
            <Footer />
        </div>
    );
};

export default Home;

				