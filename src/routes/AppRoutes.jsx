import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Logement from "../pages/Logement";
import About from "../pages/About";
import Error404 from "../pages/Error";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
export default AppRoutes;
