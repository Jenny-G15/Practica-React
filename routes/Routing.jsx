import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register  from '../pages/Register';
import Login from '../pages/Login'
import ProtectedRoute from './Protec';
//import Protec from './Protec'; //

const Routing = () => {

  return (
    <Router>
     <Routes>

       <Route path="/" element={<Login />} />
       <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
       <Route path="/Register" element={<Register/>} />
      
     
     
    
     </Routes>
    </Router>
   );
};
export default Routing

 //<Route path="/Home" element={ <Protec><Home/></Protec>} />