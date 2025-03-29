import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.jpg"; // Импорт изображения

const HomePage = () => {
  return (
    <div
      className="homepage-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
      }}
    >
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
