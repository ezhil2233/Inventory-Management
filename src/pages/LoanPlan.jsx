import React, { useState ,useRef} from "react";
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
    ignoreRowClick: true   // prevents row click when button clicked
    //allowOverflow: true,
    //button: true,
  },
];

const LoanPlan = () => {

  const modalRef = useRef(null);
  
 const handleSubmit = async (e) => {
    e.preventDefault();
    // Close modal
    const modal = window.bootstrap.Modal.getInstance(modalRef.current);
    modal.hide();
  };
  return (
    <div className="">
      <h2 className={`${Styless.page_title}`}>Loan plan list</h2>
      <div className="container-fluid px-5">
        <button className="d-flex justify-content-start mb-3 btn btn-success " data-bs-toggle="modal" data-bs-target="#addPlanModal">
          Add New Plan
        </button>

        <div className="row">
          <div className="container mt-4">
            <DataTable
              columns={columns}
              data={loans}
              pagination
              highlightOnHover
              responsive
            />
          </div>

          <div className="modal fade" id="addPlanModal" ref={modalRef}>
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Plan</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                          <div className="row g-3">                        
                              <div className="col-md-6">
                                <label className="form-label">Plan Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control"/>
                              </div>

                              <div className="col-md-6">
                                  <label className="form-label">Gender<span className="text-danger">*</span></label>
                                  <select className="form-select">
                                    <option>Male</option>
                                    <option>Female</option>
                                  </select>
                                </div>                           
                          </div>
                          
                        <div className="row g-3">     
                          <div className="col-md-6">
                            <label className="form-label">DOB <span className="text-danger">*</span></label>
                            <input type="text" className="form-control"/>
                          </div>

                           <div className="col-md-6">
                            <label className="form-label">Address<span className="text-danger">*</span></label>
                            <textarea type="textarea" className="form-control"/>
                          </div>
                        </div>
                        
                        <div className="row g-3">
                          <div className="col-md-6">
                              <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                              <input type="text" className="form-control"/>
                            </div>


                          <div className="col-md-6">
                              <label className="form-label">Email <span className="text-danger">*</span></label>
                              <input type="text" className="form-control"/>
                            </div>  
                        </div>

                        <div className="row g-3">
                          <div className="col-md-6">
                              <div className="col-md-6">
                                  <label className="form-label">KYCStatus<span className="text-danger">*</span></label>
                                  <select className="form-select">
                                    <option>Yes</option>
                                    <option>No</option>
                                  </select>
                                </div>
                            </div>
                        </div>
                        
                </div>
                <div className="modal-footer">
                  <button className="btn btn-success" type="sunmit">Save</button>
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
