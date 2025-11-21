import React from "react";
import TotalBalance from "../widgets/TotalBalance.jsx";
import CashBalance from "../widgets/CashBalance.jsx";
import BankBalance from "../widgets/BankBalance.jsx";
import Styless from "../styles/DashboardPage.module.css";
import { DashboardService } from "../services/DashboardService.js";

const DashboardPage = () => (
    <div className="">
      <h2 className={`${Styless.page_title}`}>DASHBOARD</h2>
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-md-3"><TotalBalance/></div>
          <div className="col-md-3"><CashBalance/></div>
          <div className="col-md-3"><BankBalance/></div>
          <div className="col-md-3"><TotalBalance/></div>
        </div>
      </div>
    </div>
);

export default DashboardPage;
