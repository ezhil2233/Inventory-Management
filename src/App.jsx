import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Sidebar from "./components/Sidebar.jsx"

import DashboardPage from "./pages/DashboardPage.jsx";
import LoanPlan from "./pages/LoanPlan.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import MessagesPage from "./pages/MessagesPage.jsx";



const App = () => {

  

  return (
    
    <Router>
      <div className="d-flex flex-column vh-100">
        <div className="d-flex flex-grow-1">
          <Sidebar />
          <main className="flex-grow-1 bg-light">
            <Header/>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/loanplan" element={<LoanPlan />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/messages" element={<MessagesPage />} />
            </Routes>
          </main>
        </div>
        
      </div>
    </Router>
  );
};

export default App;
