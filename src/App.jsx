import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <div className="container">
        <Header />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
