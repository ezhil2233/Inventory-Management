import React from "react";
import DataTable from "react-data-table-component";

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

const LoanPlan = () => (
  <div class="container my-4">

    <div class="d-flex justify-content-start mb-3">
      <label class="me-3">Loan Plan List</label>
      <button class="btn btn-success">+</button>
    </div>


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
    </div>


  </div>
);

export default LoanPlan;
