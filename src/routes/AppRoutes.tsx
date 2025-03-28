import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Organizations from "../pages/Organizations";
import HomePage from "../pages/HomePage"; // Добавляем главную страницу

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Маршрут для главной */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="*" element={<h1>404 - Страница не найдена</h1>} /> {/* 404 */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;

