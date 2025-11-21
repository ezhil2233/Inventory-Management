import React ,{useState}from "react";

export default function LoanPopUp({ closePopup, saveData }) {

    const [loanForm, setLoanForm] = useState(
    { 
      planName: "",
      gender: "", 
      dob:"",
      address:"",
      phoneNumber:"",
      email:"",
      kycStatus:""

    });

    const handleSubmit = async(e) => {
      e.preventDefault();
      closePopup();
      saveData(loanForm);
      
    }

  if (!closePopup) return null;


  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ background: "rgba(0,0,0,0.5)", zIndex: 2000 }}
    >
      <div className="bg-white p-4 rounded shadow" style={{ width: "800px" }}>
       <form onSubmit={handleSubmit}>
                <div className="modal-body">
                          <div className="row g-3">                        
                              <div className="col-md-6">
                                <label className="form-label">Plan Name <span className="text-danger">*</span></label>
                                <input type="text" value={loanForm.fullName} onChange={(e) => setLoanForm({ ...loanForm, fullName: e.target.value })} className="form-control"/>
                              </div>

                              <div className="col-md-6">
                                  <label className="form-label"  value={loanForm.gender} onChange={(e) => setLoanForm({ ...loanForm, gender: e.target.value })}>Gender<span className="text-danger">*</span></label>
                                  <select className="form-select">
                                    <option>Male</option>
                                    <option>Female</option>
                                  </select>
                                </div>                           
                          </div>
                          
                        <div className="row g-3">     
                          <div className="col-md-6">
                            <label className="form-label">DOB <span className="text-danger">*</span></label>
                            <input value={loanForm.dob} onChange={(e) => setLoanForm({ ...loanForm, dob: e.target.value })} type="text" className="form-control"/>
                          </div>

                           <div className="col-md-6">
                            <label className="form-label">Address<span className="text-danger">*</span></label>
                            <textarea type="textarea" value={loanForm.address} onChange={(e) => setLoanForm({ ...loanForm, address: e.target.value })} className="form-control"/>
                          </div>
                        </div>
                        
                        <div className="row g-3">
                          <div className="col-md-6">
                              <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                              <input type="text" value={loanForm.phoneNumber} onChange={(e) => setLoanForm({ ...loanForm, phoneNumber: e.target.value })}className="form-control"/>
                            </div>


                          <div className="col-md-6">
                              <label className="form-label">Email <span className="text-danger">*</span></label>
                              <input type="text" value={loanForm.email} onChange={(e) => setLoanForm({ ...loanForm, email: e.target.value })} className="form-control"/>
                            </div>  
                        </div>

                        <div className="row g-3">
                          <div className="col-md-6">
                              <div className="col-md-6">
                                  <label className="form-label">KYCStatus<span className="text-danger">*</span></label>
                                  <select value={loanForm.kycStatus} onChange={(e) => setLoanForm({ ...loanForm, kycStatus: e.target.value })} className="form-select">
                                    <option>Yes</option>
                                    <option>No</option>
                                  </select>
                                </div>
                            </div>
                        </div>
                        
                </div>
                <div className="modal-footer">
                  <button className="btn btn-success" type="submit">Save</button>
                  <button className="btn btn-danger" onClick={closePopup}>Cancel</button>
                </div>
              </form>
      </div>
    </div>
  );
}
