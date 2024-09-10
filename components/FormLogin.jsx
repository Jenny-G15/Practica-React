import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import GetUsers from '../services/GetUsers';
import { Link, useNavigate } from "react-router-dom";


export default function FormLogin() {

  const Navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  /*const irRegister = () => {
    Navigate("/register")
  }*/

  const loguearUsuario = async (event) => {
    event.preventDefault();

    try {
      let users = await GetUsers();
      let userExist = users.find((user) => user.email === email && user.password == password)
      if (userExist) {

        localStorage.setItem('Autenticado', 'true')
        Navigate("/Home");

      } else {
        console.log("email o contraseña incorrecto")
      }
    } catch (error) {
      console.log("Fallo el try", error)

    }
    console.log('Email:', email);
    console.log('Password:', password)

  }
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={6}>
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={loguearUsuario}>
              <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Iniciar sesion
              </Button>
              <Link to="/register">
                Registrate
              </Link>
             
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
