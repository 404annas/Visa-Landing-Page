import React from "react";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import WorkVisa from "./pages/WorkVisa";
import Layout from "./Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="workvisa" element={<WorkVisa />} />
      </Route>
    </Routes>
  );
};

export default App;
