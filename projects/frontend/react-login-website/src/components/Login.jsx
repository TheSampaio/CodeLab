import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <header className="login-header">Login</header>
        <input className="login-entry" placeholder="E-mail" type="email" />
        <input className="login-entry" placeholder="Password" type="password" />

        <label className="login-checkbox-label">
          <input className="login-checkbox" type="checkbox" />
          Remember Me
        </label>

        <input className="login-button" type="submit" value="Enter" />
      </form>
    </div>
  );
}

export default Login;
