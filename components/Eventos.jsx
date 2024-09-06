import React, { useState, useEffect } from 'react';
import "../styles/home.css";

const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [nuevoEvento, setNuevoEvento] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    const eventosGuardados = JSON.parse(localStorage.getItem('evento')) || [];
    setEventos(eventosGuardados);
  }, []);

  useEffect(() => {
    localStorage.setItem('evento', JSON.stringify(eventos));
  }, [eventos]);

  const agregarEvento = () => {
    if (nuevoEvento && fecha) {
      const nuevaLista = [...eventos, { evento: nuevoEvento, fecha }];
      setEventos(nuevaLista);
      setNuevoEvento('');
      setFecha('');
    }
  };

  const editarEvento = (index) => {
    const nuevaEventos = [...eventos];
    const nuevoTexto = prompt('Edita el evento', nuevaEventos[index].evento);
    const nuevaFecha = prompt('Edita la fecha', nuevaEventos[index].fecha);

    if (nuevoTexto !== null && nuevaFecha !== null) {
      nuevaEventos[index] = { evento: nuevoTexto, fecha: nuevaFecha };
      setEventos(nuevaEventos);
    }
  };

  const eliminarEvento = (index) => {
    const nuevaLista = eventos.filter((_, i) => i !== index);
    setEventos(nuevaLista);
  };

  return (
    <div>
      <h2>Eventos</h2>
      <input
        type="text"
        value={nuevoEvento}
        onChange={(e) => setNuevoEvento(e.target.value)}
        placeholder="Nuevo evento"
      />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <button onClick={agregarEvento}>Agregar Evento</button>
      <div id="contenedorEventos">
        {eventos.map((evento, index) => (
          <div key={index} className="contenedor-Evento">
            <p>{evento.evento}</p>
            <p>{evento.fecha}</p>
            <button onClick={() => eliminarEvento(index)}>Eliminar</button>
            <button onClick={() => editarEvento(index)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventos;
