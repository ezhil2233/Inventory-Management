import React from "react";

const BankBalance = () => (
  <div className="card shadow-sm">
          <div className="card-body d-flex p-0">
            <div className="d-flex align-items-center justify-content-center bg-danger text-white" >
              <i className="bi bi-bank2 fs-3"></i>
            </div>
            <div className="p-3 text-start flex-grow-1">
              <h6 className="card-subtitle mb-1">BANK BALANCE</h6>
              <h5 className="card-title mb-0">150</h5>
            </div>
          </div>
        </div>
);

export default BankBalance;
