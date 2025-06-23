import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; 
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { login } = useAuth(); // 

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
