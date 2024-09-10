import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import  getUsers  from '../services/GetUsers';
import  postUsers  from '../services/PostUsers'; 
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import BodyBackground from './BodyBackground';



async function registerUser(username, email, password) { 

  try {
    let users = await getUsers();
    let userExist = users.some(user => user.username === username)
    if (userExist) {
      console.log("Este usuario existe")
    } else {
      await postUsers(username, email, password)
      console.log("Registro exitoso")

       
    }
  } catch (error) {
    console.log("Error al registrar", error)
  
  }  
}

function FormRegister() {
  const Navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const hacerValidacion = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  };

  const registarUsuario = async (event) => {
    event .preventDefault();
    const { username, email, password } = formData;
    await registerUser(username, email, password);

    Navigate("/");
  };
  
  BodyBackground({background: '../img/fondo\ navideño.jpg'})

  return (
    <div> 
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={6}>
            <h2 className="text-center mb-4">Regístrese</h2>
            <Form onSubmit={registarUsuario}>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={hacerValidacion}
                  placeholder="Ingrese nombre de usuario"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={hacerValidacion}
                  placeholder="Ingrese correo electrónico"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={hacerValidacion}
                  placeholder="Ingrese contraseña"
                />
              </Form.Group>

              <Button  variant="primary" type="submit" className="w-100">Registrarse</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FormRegister;