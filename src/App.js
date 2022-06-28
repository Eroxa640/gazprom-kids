import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import NavLayouts from "./Layouts/NavLayouts/NavLayouts";
import "./App.sass";
import Section from "./components/Section/Section";

function App() {
  return (
    <NavLayouts>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sections" element={<Section />} />
      </Routes>
    </NavLayouts>
  );
}

export default App;
