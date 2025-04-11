import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HousePage from "./Pages/HousePage";
import HomePage from "./Pages/HomePage";
import LogInPage from "./Pages/LogInPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Use element with JSX syntax */}
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LogInPage />} />
          <Route path="/house/:id" element={<HousePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
