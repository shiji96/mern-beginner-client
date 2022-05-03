import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddMaterial from "./components/AddMaterial";
// import AddMaterial from "./components/AddMaterial";
import ShowMaterial from "./components/Material/ShowMaterial";
import Materials from "./components/Material/Materials";
import MaterialDetail from "./components/Material/MaterialDetail";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddMaterial />} exact />
          <Route path="/materials" element={<Materials />} exact />
          <Route path="/materials/:id" element={<MaterialDetail />} exact />
          <Route path="/showmaterial/:id" element={<ShowMaterial />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
