import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Welcome from "../pages/Welcome";
import NotFound from "../pages/NotFound";
import Logs from "../pages/Logs";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="home" element={<Home />} />
      <Route path="logs" element={<Logs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
