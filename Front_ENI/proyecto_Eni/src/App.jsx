import { useNavigate } from "react-router-dom";
import "./css/index.css";
import logo from "./assets/logo-eni.png";

function App() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <img src={logo} alt="Logo ENI" className="logo-eni" />
        <h1>¡Bienvenido a ENI! 🚀</h1>
        <p>
          Tu solución para la gestión eficiente y moderna.  
          Comienza a explorar todas las funcionalidades que hemos creado para ti.
        </p>
        <button onClick={() => navigate("/principal")}>
          Empezar ahora
        </button>
      </div>
    </div>
  );
}

export default App;
