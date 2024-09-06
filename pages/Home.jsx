import Tareas from '../components/Tareas'
import Eventos from '../components/Eventos'
import "../styles/home.css";
import BodyBackground from '../components/BodyBackground';
import IMGPrueba from '../img/rosa.jpeg'


export default function Home() {
  return (
    <>
   <BodyBackground background={IMGPrueba}/>
  <div>
    <Tareas />
    <Eventos />
  </div>
 
    </>
  )
}
 