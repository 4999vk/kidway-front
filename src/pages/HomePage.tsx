import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Добро пожаловать в KidWay!</h1>
      <p>Это главная страница вашего приложения.</p>
      
      <div>
        <Link to="/login">
          <button>Войти</button>
        </Link>
        <Link to="/register">
          <button>Регистрация</button>
        </Link>
        <Link to="/organizations">
          <button>Организации</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;