import React from "react";
import { NavLink } from "react-router-dom";
import Styless from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={`d-flex flex-column bg-dark text-white vh-100 w-25 ${Styless.banner_background}`} >
      {/* Profile Section */}
      <div className={`text-center ${Styless.sidebar_user_info}`}>
        <i className="bi bi-person-circle fs-1">Logo</i>
      </div>

      {/* Sidebar Menu */}
      <div className="flex-grow-1 overflow-auto">
        <h4 className={`${Styless.customBorder}`}>General</h4>
        <ul className="nav flex-column mt-2">
          <li className="nav-item">
            <NavLink to="/" end className="nav-link text-white" >
             <i className={`fa fa-dashboard ${Styless.dashboard_icon_color}`}/><span>Dashboard</span>
             </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/loanplan" className="nav-link text-white" >
               <i className={`fa fa-diamond ${Styless.newloan_icon_color}`}/><span>New Loan</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings" className="nav-link text-white" >
            <i className={`fa fa-object-group ${Styless.setting_icon_color}`}/><span>Setting</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/messages" className="nav-link text-white" >
             <i className={`fa fa-paper-plane ${Styless.message_icon_color}`}/><span>Message</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
