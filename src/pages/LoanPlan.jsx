import React, { useState, useRef, useEffect } from "react";
import DataTable from "react-data-table-component";
import Styless from "../styles/DashboardPage.module.css";
import { AxiosCtx } from "../utils/AxiosCtx.js";
import Popup from "../dialoueBox/LoanPopUp.jsx";



const LoanPlan = () => {
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);
  const[employees, setEmployees] = useState([]);
  


  useEffect(() => {
   loadTableData();
  }, []);

const loadTableData = () => {
    AxiosCtx.get("/getWidgets").then(res => setEmployees(res.data))
}

  const saveData = async (data) => {
    try {
      const res = await AxiosCtx.post("/createCustomer", data).then(()=>{
        loadTableData();
      });
      console.log("Response:", res.data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (

      <div className="">
      <h2 className={`${Styless.page_title}`}>Loan plan list</h2>
      <div className="container-fluid px-5">
        <button className="d-flex justify-content-start mb-3 btn btn-success " onClick={openPopup}>
          Add New Plan
        </button>       
        
        {showPopup && (
        <Popup  closePopup={closePopup} loadTableData={loadTableData} saveData={saveData}/>        
        )}
        {/* Table */}
        <table className="table table-bordered">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {employees.map(e => (
      <tr key={e.id}>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.email}</td>
      </tr>
    ))}
  </tbody>
</table>

        {/* END Table */}
      </div>
    </div>
  );
};

export default LoanPlan;
