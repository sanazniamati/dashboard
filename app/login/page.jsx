import styles from "../ui/login/login.module.css";

function LoginPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>Login</button>
      </form>
      {/* <LoginForm/> */}
    </div>
  );
}

export default LoginPage;
