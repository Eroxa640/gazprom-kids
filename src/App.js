import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import NavLayouts from "./Layouts/NavLayouts/NavLayouts";
import "./App.sass";
import Section from "./pages//Section/Section";
import Events from "./pages/Events/Events";
import Team from "./pages/Team/Team";
import Rent from "./pages/Rent/Rent";

function App() {
  return (
    <NavLayouts>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sections" element={<Section />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/rent" element={<Rent/>} />
      </Routes>
    </NavLayouts>
  );
}

export default App;
