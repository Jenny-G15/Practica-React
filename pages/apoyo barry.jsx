   /*LOGIN FORM

import React, { useState } from 'react';


function FormLogin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  function  cargaUsuario(event) {
    setUsername(event.target.value);
  }

  const cargaContra = (event) => {
    setPassword(event.target.value);
  };


  //ESTA FUNCION PUEDE CARGAR ,HACER POST O BIEN REALIZAR VALIDACIONES
  const cargar = () => {
 
    console.log('Nombre:', username);
    console.log('Contraseña:', password);
  };


  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <div>
        <label htmlFor="username">Nombre</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Ingrese su nombre"
          value={username}
          onChange={cargaUsuario}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
      <input type="password" id="password"  name="password" placeholder="Ingrese su contraseña"
          value={password}
          onChange={cargaContra}
          required
        />
      </div>
      <button onClick={cargar}>Iniciar</button>
    </div>
  );
}

export default FormLogin;

//////////IMPLEMENTACION HOOKS////////////////////

import { useEffect, useState } from 'react';
import GetUsers from '../services/getUsers';

function CardUser() {


    const [users, setUsers] = useState([]);


    useEffect(() => {
      const fetchUsers = async () => {
        const data = await GetUsers();
       
        
        setUsers(data);
   
      };
      fetchUsers();
    }, []);

    console.log(users)

    return (
      <div>
        <h1>Lista de Usuarios</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
export default CardUser

////////LINK TO Y ENVIO DE PROPS/////////

import React from 'react'
import { Link } from "react-router-dom";

import Footer from '../components/Footer'
function Navbar() {
  return (

  <div>
          <nav>
            <ul>
                <li><Link to="/Home" >Home </Link></li>
                <li><Link to="/Register">Register</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Principal" >Principal</Link></li>
            </ul>
        </nav>

        <Footer valor="24" />
  </div>
  )
}

export default Navbar

/////////RECIBIR INFO DE PROPS/////////////


import React from 'react';

function Footer(props) {

  console.log(props)
  
  return (
    <div>
      {props.valor} 
    </div>
  );
}

export default Footer;


///////RUTAS Y RUTA POR DEFAULT///////////

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Principal from '../pages/Principal';
import Home from '../pages/Home';

const Routing = () => {
  return (
    
    <Router>
     <Routes>
     <Route path="/" element={<Home />} />
       <Route path="/Register" element={<Register />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Principal" element={<Principal />} />
     </Routes>
    </Router>
 
   );
};
export default Routing; */


