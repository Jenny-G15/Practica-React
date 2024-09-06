import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register  from '../pages/Register';
import Login from '../pages/Login'
import Protec from './Protec';

const Routing = () => {

  return (
    <Router>
     <Routes>

       <Route path="/" element={<Login />} />
       <Route path="/login" element={<Login />} />
       <Route path="/Register" element={<Register/>} />
       <Route path="/Home" element={ <Protec><Home/></Protec>} />
     
    
     </Routes>
    </Router>
   );
};
export default Routing