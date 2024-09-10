import React, { useState, useEffect } from 'react';
import "../styles/home.css";
import PostTareas from '../services/PostTareas';
import GetTareas from '../services/GetTareas';
import { deleteTarea } from '../services/Delete';
import { updateTarea } from '../services/Put';
import { Link } from 'react-router-dom';


const Tareas = () => {
   const [tareas, setTareas] = useState([]);
   const [nuevaTarea, setNuevaTarea] = useState('');
   const [prioridad, setPrioridad] = useState('');
   const [editando, setEditando] = useState(false);
   const [tareaEditada, setTareaEditada] = useState('');
   const [prioridadEditada, setPrioridadEditada] = useState('');
   const [idEditado, setIdEditado] = useState(null);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const response = await GetTareas();
        setTareas(response);

      } catch (error) {
        console.error('Error al obtener tareas:', error);
      }
    };

    fetchTareas();
  }, []);

  console.log(tareas)

  const agregarTarea = async () => {
    await PostTareas(nuevaTarea, prioridad)
    setNuevaTarea('')
    setPrioridad('')

    window.location.reload()
  };
  
  const empezarEdicion = (id) => {
    const tareaActual = tareas.find(t => t.id === id); 
    
    console.log(tareaActual);
    
    setTareaEditada(tareaActual.tarea); 
    setPrioridadEditada(tareaActual.prioridad)

    setEditando(true);
    setIdEditado(id);
  };

    const guardarEdicion = async () => {
      
      console.log(tareaEditada);
    
    try {
      const response = await updateTarea(idEditado, tareaEditada, prioridadEditada);
      console.log(response);
      window.location.reload()
      
    } catch (error) {
      console.error('Error al editar tarea:', error);

    } finally {
      setEditando(false);
      setTareaEditada("");
      setPrioridadEditada("");
      setIdEditado(null);
    }
  };
  

  const eliminarTarea = async (identificador) => {
   deleteTarea(identificador)
   window.location.reload()
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
      <button className='contacto'> <Link to={"/Contacts"}>Contactos </Link></button>

      
      {editando && (
       <div className="formulario-edicion">
       <h3>Editar Tarea</h3>
     <input
      type="text"
      value={tareaEditada}
      onChange={(e) => setTareaEditada(e.target.value)}
      placeholder="Tarea"
    />
    <input
      type="text"
      value={prioridadEditada}
      onChange={(e) => setPrioridadEditada(e.target.value)}
      placeholder="Prioridad"
    />
    <button onClick={guardarEdicion}>Guardar</button>
  </div>
)}
      <div id="contenedorTareas">
        {tareas.map((tarea) => (
          <div key={tarea.id} className="contenedor-tareas">
            <p>{tarea.tarea}</p>
            <p>{tarea.prioridad}</p>
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
            <button onClick={() => empezarEdicion(tarea.id)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tareas;