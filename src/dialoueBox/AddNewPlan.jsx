import React from "react";

const AddNewPlan = () => {
    return (
        <div class="container mt-5">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">Add New Plan</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label">Select Loan Type *</label>
                                <select class="form-select">
                                    <option selected>Select Loan Plan</option>
                                    <option>Personal Loan</option>
                                    <option>Home Loan</option>
                                    <option>Business Loan</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Plan Amount *</label>
                                <input type="number" class="form-control" value="0" />
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Plan Name *</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">File Charge *</label>
                                <input type="number" class="form-control" value="0" />
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Number of Payments *</label>
                                <input type="number" class="form-control" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Processing Fee In Percentage (%) *</label>
                                <input type="number" class="form-control" value="0" />
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Recovery Type *</label>
                                <select class="form-select">
                                    <option selected>Recovery type</option>
                                    <option>Monthly</option>
                                    <option>Quarterly</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Select Status *</label>
                                <select class="form-select">
                                    <option selected>Select Status</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">No of Advance Installment *</label>
                                <select class="form-select">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Holiday Exclude *</label>
                                <select class="form-select">
                                    <option>No</option>
                                    <option>Yes</option>
                                </select>
                            </div>
                        </div>

                        <div class="mt-4 text-end">
                            <button type="submit" class="btn btn-success">SAVE</button>
                            <button type="button" class="btn btn-primary">Calculate EMI</button>
                            <button type="button" class="btn btn-danger">CANCEL</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddNewPlan