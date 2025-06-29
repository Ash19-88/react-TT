import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; 
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import users from "../../data/users.json";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!username.trim()) return "El email es requerido.";
    if (!password.trim()) return "La contraseña es requerida.";
    return "";
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError("");
    const user = users.find(
      (u) => u.email === username && u.password === password
    );
    if (user) {
      login(user);
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/cart");
      }
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={`container ${styles.centerContainer}`}>
        <form
          onSubmit={handleLogin}
          className={styles.loginForm}
          role="form"
          aria-labelledby="login-title"
        >
          <h2 id="login-title">Iniciar sesión</h2>
          <label htmlFor="login-email" className="visually-hidden">Email</label>
          <input
            id="login-email"
            name="email"
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
            autoComplete="username"
            required
            aria-required="true"
          />
          <label htmlFor="login-password" className="visually-hidden">Contraseña</label>
          <input
            id="login-password"
            name="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            autoComplete="current-password"
            required
            aria-required="true"
          />
          {error && (
            <div className={styles.error} aria-live="polite" role="alert">
              {error}
            </div>
          )}
          <button
            type="submit"
            className={styles.loginButton}
            aria-label="Iniciar sesión"
            disabled={error.length > 0}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
