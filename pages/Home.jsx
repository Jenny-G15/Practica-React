import Tareas from '../components/Tareas'
import "../styles/home.css";
import BodyBackground from '../components/BodyBackground';
import IMGPrueba from '../img/christmas.jpg'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  function cerrarSesion() {
    localStorage.removeItem('Autenticado');
    navigate('/');
  };

  return (
    <>
   <BodyBackground background={IMGPrueba}/>
  <div>
    <Tareas />

    <button className='sesion' onClick={cerrarSesion}>Cerrar Sesión</button> 
  </div>
 
    </>
  )
}
 