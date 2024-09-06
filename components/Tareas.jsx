import React, { useState, useEffect } from 'react';
import "../styles/home.css";

const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [prioridad, setPrioridad] = useState('');

  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    setTareas(tareasGuardadas);
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (nuevaTarea && prioridad) {
      const nuevaLista = [...tareas, { tareas: nuevaTarea, prioridad }];
      setTareas(nuevaLista);
      setNuevaTarea('');
      setPrioridad('');
    }
  };

  const editarTarea = (index) => {
    const nuevaTareas = [...tareas];
    const nuevaTarea = prompt('Edita la tarea', nuevaTareas[index].tareas);
    const nuevaPrioridad = prompt('Edita la prioridad', nuevaTareas[index].prioridad);
    
    if (nuevaTarea !== null && nuevaPrioridad !== null) {
      nuevaTareas[index] = { tareas: nuevaTarea, prioridad: nuevaPrioridad };
      setTareas(nuevaTareas);
    }
  };

  const eliminarTarea = (index) => {
    const nuevaLista = tareas.filter((_, i) => i !== index);
    setTareas(nuevaLista);
  };

  return (
    <div className='prueba'>
      <h2>Tareas</h2>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <input
        type="text"
        value={prioridad}
        onChange={(e) => setPrioridad(e.target.value)}
        placeholder="Prioridad"
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <div id="contenedorTareas">
        {tareas.map((tarea, index) => (
          <div key={index} className="contenedor-tareas">
            <p>{tarea.tareas}</p>
            <p>{tarea.prioridad}</p>
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
            <button onClick={() => editarTarea(index)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tareas;

