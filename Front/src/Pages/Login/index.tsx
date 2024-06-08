import { Button } from "react-bootstrap";
import "./login.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(email);

  return (
    <div className="bg">
      <div className="login">
        <div
          style={{
            width: 280,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <h1 style={{ textAlign: "center" }}>Entre </h1>
          <div>
            <Form.Label htmlFor="inputPassword5">Email</Form.Label>
            <Form.Control
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              aria-describedby="passwordHelpBlock"
            />
          </div>
          <div>
            <Form.Label htmlFor="inputPassword5">Senha</Form.Label>
            <Form.Control
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              aria-describedby="passwordHelpBlock"
            />
          </div>
          <h6>
            Não tem um usuário ? <a href="/userManager">clique aqui</a> para
            criar um
          </h6>
          <Button variant="success" onClick={() => onClickLogin()}>
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
