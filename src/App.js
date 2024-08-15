import React from "react";

import Prices from "./Prices";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
    </Router>
  );
};

export default App;
