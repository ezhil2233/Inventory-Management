import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Styless from "../styles/DashboardPage.module.css";

const loans = [
  { id: 1, name: "Personal Loan", amount: 5000 },
  { id: 2, name: "Home Loan", amount: 20000 },
  { id: 3, name: "Car Loan", amount: 10000 },
];

// Action button component
const ActionButton = ({ row }) => {
  const handleClick = () => {
    alert(`Editing ${row.name}`);
  };

  return (
    <button className="btn btn-sm btn-primary" onClick={handleClick}>
      Edit
    </button>
  );
};

const columns = [
  { name: "ID", selector: row => row.id, sortable: true },
  { name: "Name", selector: row => row.name, sortable: true },
  { name: "Amount", selector: row => row.amount, sortable: true },
  {
    name: "Actions",
    cell: row => <ActionButton row={row} />,
    ignoreRowClick: true,   // prevents row click when button clicked
    allowOverflow: true,
    button: true,
  },
];

const LoanPlan = () => {

  

  return (
    <div className="">
      <h2 className={`${Styless.page_title}`}>Loan plan list</h2>
      <div className="container-fluid px-5">
        <button className="d-flex justify-content-start mb-3 btn btn-success " data-bs-toggle="modal" data-bs-target="#addPlanModal">
          Add New Plan
        </button>

        <div class="row">
          <div className="container mt-4">
            <DataTable
              columns={columns}
              data={loans}
              pagination
              highlightOnHover
              responsive
            />
          </div>

          <div className="modal fade" id="addPlanModal" tabindex="-1">
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Plan</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
              <form>
                <div className="modal-body">
                          <div class="row g-3">                        
                              <div class="col-md-6">
                                <label class="form-label">Plan Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control"/>
                              </div>

                              <div class="col-md-6">
                                  <label class="form-label">Gender<span class="text-danger">*</span></label>
                                  <select class="form-select">
                                    <option>Male</option>
                                    <option>Female</option>
                                  </select>
                                </div>                           
                          </div>
                          
                        <div class="row g-3">     
                          <div class="col-md-6">
                            <label class="form-label">DOB <span class="text-danger">*</span></label>
                            <input type="text" class="form-control"/>
                          </div>

                           <div class="col-md-6">
                            <label class="form-label">Address<span class="text-danger">*</span></label>
                            <textarea type="textarea" class="form-control"/>
                          </div>
                        </div>
                        
                        <div class="row g-3">
                          <div class="col-md-6">
                              <label class="form-label">Phone Number <span class="text-danger">*</span></label>
                              <input type="text" class="form-control"/>
                            </div>


                          <div class="col-md-6">
                              <label class="form-label">Email <span class="text-danger">*</span></label>
                              <input type="text" class="form-control"/>
                            </div>  
                        </div>

                        <div class="row g-3">
                          <div class="col-md-6">
                              <div class="col-md-6">
                                  <label class="form-label">KYCStatus<span class="text-danger">*</span></label>
                                  <select class="form-select">
                                    <option>Yes</option>
                                    <option>No</option>
                                  </select>
                                </div>
                            </div>
                        </div>
                        
                </div>
                <div className="modal-footer">
                  <button className="btn btn-success">Save</button>
                  <button className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                </div>
              </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
};

export default LoanPlan;
