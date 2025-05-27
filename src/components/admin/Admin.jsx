import styles from './Admin.module.css';

const Admin = () => {
  return (
    <div className={styles.mainContainer}>
          <div className="container text-center my-5 min-vh-100">
      <h2>Panel de administración</h2>
      <p>Contenido protegido solo visible para usuarios autenticados.</p>
      </div>
    </div>
  );
};

export default Admin;
