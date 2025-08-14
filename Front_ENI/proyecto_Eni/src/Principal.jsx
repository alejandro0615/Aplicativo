import "./css/principal.css";
import logo from "./assets/logo-eni.png";
import { useNavigate } from "react-router-dom";

function Principal() {
  const navigate = useNavigate(); // ✅ Inicializar

  return (
    <div className="app-root">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-left">
          <img src={logo} alt="Logo ENI" className="logo-eni" />
          <span className="brand">ENI</span>
        </div>
        <nav className="nav-links">
          <a href="#features">Funciones</a>
          <a href="#about">Acerca</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section className="welcome-container">
          <div className="welcome-card">
            <h1>¡Bienvenido a ENI! 🚀</h1>
            <p>
              Tu solución para la gestión eficiente y moderna. Comienza a
              explorar todas las funcionalidades que hemos creado para ti.
            </p>
            <div className="cta-group">
              <button className="btn-primary">Empezar ahora</button>
              <button className="btn-ghost">Ver demo</button>
            </div>
          </div>
        </section>

        {/* Funcionalidades */}
        <section id="features" className="section features">
          <h2>Lo que puedes hacer con ENI</h2>
          <div className="features-grid">
            <article className="feature-card">
              <h3>Gestión de usuarios</h3>
              <p>Crea, edita y organiza perfiles con total control.</p>
            </article>
            <article className="feature-card">
              <h3>Reportes en tiempo real</h3>
              <p>Visualiza métricas clave para tomar decisiones rápidas.</p>
            </article>
            <article className="feature-card">
              <h3>Integraciones</h3>
              <p>Conecta con herramientas que ya usas en tu equipo.</p>
            </article>
          </div>
        </section>

        {/* Acerca */}
        <section id="about" className="section about">
          <div className="about-inner">
            <h2>¿Qué es ENI?</h2>
            <p>
              ENI es un aplicativo pensado para simplificar tu flujo de trabajo.
              Diseñado con foco en rendimiento, seguridad y una experiencia
              moderna.
            </p>
          </div>
        </section>

        {/* Llamado final */}
        <section className="section final-cta">
          <h2>¿Listo para comenzar?</h2>
          <p>Configura tu cuenta y empieza a usar ENI hoy mismo.</p>
          <button
            className="btn-primary"
            onClick={() => navigate("/registro")}
          >
            Crear cuenta
          </button>
        </section>
      </main>

      <footer className="footer" id="contact">
        <p>© {new Date().getFullYear()} ENI — Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#privacy">Privacidad</a>
          <a href="#terms">Términos</a>
          <a href="#support">Soporte</a>
        </div>
      </footer>
    </div>
  );
}

export default Principal;
