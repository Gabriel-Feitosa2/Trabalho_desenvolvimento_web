import Table from "react-bootstrap/Table";

import "./userManeger.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Pen from "../../assets/pen.svg";
import Trash from "../../assets/trash.svg";

interface User {
  id: string;
  email: string;
  password: string;
}

function UserManager() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectUser, setSelectUser] = useState({} as User);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/users/${selectUser.id}`,
        {
          email: selectUser.email,
          password: selectUser.password,
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      const response = await axios.delete(`http://localhost:3000/users/${id}`);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [show]);

  console.log(selectUser);

  return (
    <div className="bg">
      <Button
        style={{ marginBottom: 12 }}
        onClick={() => navigate("/Register")}
      >
        Registar Usuarios
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <th>{user.password}</th>
              <th>
                <div style={{ display: "flex" }}>
                  <div
                    className="edit"
                    onClick={() => {
                      handleShow(), setSelectUser(user);
                    }}
                  >
                    <img src={Pen} width={18} />
                  </div>
                  <div
                    className="edit"
                    onClick={() => {
                      deleteUser(user.id);
                      getUser();
                    }}
                  >
                    <img src={Trash} width={18} />
                  </div>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div>
            <Form.Label htmlFor="inputPassword5">Email</Form.Label>
            <Form.Control
              type="text"
              aria-describedby="passwordHelpBlock"
              onChange={(event) =>
                setSelectUser({ ...selectUser, email: event.target.value })
              }
              defaultValue={selectUser.email}
            />
          </div>
          <div>
            <Form.Label htmlFor="inputPassword5">Senha</Form.Label>
            <Form.Control
              type="text"
              aria-describedby="passwordHelpBlock"
              defaultValue={selectUser.password}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={() => editUser()}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserManager;
