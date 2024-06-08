import { Button } from "react-bootstrap";
import "./register.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  const onClickRegister = async () => {
    try {
      if (passwordConfirm !== password) {
        console.log("nao");
        return;
      }
      const response = await axios.post("http://localhost:3000/register", {
        email: email,
        password: password,
      });
      navigate("/userManager");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(email);

  return (
    <div className="bg">
      <div className="register">
        <div
          style={{
            width: 280,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <h1 style={{ textAlign: "center" }}>Registre se </h1>
          <div>
            <Form.Label htmlFor="inputPassword5">Email</Form.Label>
            <Form.Control
              type="text"
              aria-describedby="passwordHelpBlock"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <Form.Label htmlFor="inputPassword5">Senha</Form.Label>
            <Form.Control
              type="password"
              aria-describedby="passwordHelpBlock"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <Form.Label htmlFor="inputPassword5">
              Confirmação de Senha
            </Form.Label>
            <Form.Control
              type="password"
              aria-describedby="passwordHelpBlock"
              onChange={(event) => setPasswordConfirm(event.target.value)}
            />
          </div>
          {/* <h6>
            ja tem conta ? <a href="/Login">clique aqui</a> para entrar
          </h6> */}
          <Button variant="success" onClick={() => onClickRegister()}>
            Registrar usuario
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Register;
