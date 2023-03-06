import React from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  return (
    <div className="login-container">
      <nav className="login">
        <h2>Авторизация</h2>
        <p>введите логин и пароль вашего аккаунта Github</p>
        <button className="giithub" onClick={() => props.authenticate()}>
          Войти
        </button>
      </nav>
    </div>
  );
};

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
