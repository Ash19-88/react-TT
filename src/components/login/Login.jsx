import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; // Assuming you have a CSS module for styles

const Login = ({ login }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/admin");
  };

  return (
    <div className={styles.mainContainer}>
      <div className="container text-center my-5 min-vh-100">
        <h2>Iniciar sesión</h2>
        <button onClick={handleLogin} className={styles.loginButton}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
