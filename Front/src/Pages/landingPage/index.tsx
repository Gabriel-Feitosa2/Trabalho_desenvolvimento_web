import { Button } from "react-bootstrap";
import LandingPageImage from "../../assets/landingPageImage.jpg";
import "./App.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="image">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              gap: 12,
            }}
          >
            <h1 style={{ fontSize: 32, color: "white", fontWeight: 800 }}>
              Bem vindo ao gerenciador de alunos
            </h1>
            <Button variant="success" onClick={() => navigate("/Login")}>
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
