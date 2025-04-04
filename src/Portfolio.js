import React, { useState } from "react";

const Portfolio = () => {
  const initialData = [
    { loanNo: "L28U3247", loanType: "Home Loan", borrower: "Vedika Sachar", coBorrower: "Divit Vora", sanctionAmount: "₹ 1,934,068", status: "NPA" },
    { loanNo: "L28U3243", loanType: "Car Loan", borrower: "Hrishita Agrawal", coBorrower: "Mahika Tak", sanctionAmount: "₹ 1,842,143", status: "Active" },
    { loanNo: "L28U3250", loanType: "Car Loan", borrower: "Priyansh Soman", coBorrower: "Zaina Dara", sanctionAmount: "₹ 4,537,889", status: "Overdue" },
    { loanNo: "L28U3248", loanType: "Home Loan", borrower: "Priyansh Chanda", coBorrower: "Zain Ghosh", sanctionAmount: "₹ 2,681,712", status: "NPA" },
    { loanNo: "L28U3260", loanType: "Home Loan", borrower: "Hrishita Sen", coBorrower: "Shray Kala", sanctionAmount: "₹ 4,456,808", status: "Closed" },
    { loanNo: "L28U3270", loanType: "Personal Loan", borrower: "Anaya Mehta", coBorrower: "Aryan Kapoor", sanctionAmount: "₹ 3,100,000", status: "Overdue" },
    { loanNo: "L28U3285", loanType: "Education Loan", borrower: "Ishaan Sharma", coBorrower: "Rhea Verma", sanctionAmount: "₹ 1,250,000", status: "Active" },
    { loanNo: "L28U3292", loanType: "Gold Loan", borrower: "Kavya Nair", coBorrower: "Aditya Reddy", sanctionAmount: "₹ 500,000", status: "NPA" },
    { loanNo: "L28U3301", loanType: "Business Loan", borrower: "Sanya Jain", coBorrower: "Vihaan Bhatt", sanctionAmount: "₹ 5,800,000", status: "Closed" },
    { loanNo: "L28U3310", loanType: "Agriculture Loan", borrower: "Dhruv Joshi", coBorrower: "Nisha Patel", sanctionAmount: "₹ 2,300,000", status: "Active" }
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedColumn, setSelectedColumn] = useState("All");

  const filteredData = initialData.filter((item) => {
    const searchTerm = searchQuery.toLowerCase();

    const matchesSearch =
      searchQuery === "" ||
      (selectedColumn === "All" && (
        item.loanNo.toLowerCase().includes(searchTerm) ||
        item.loanType.toLowerCase().includes(searchTerm) ||
        item.borrower.toLowerCase().includes(searchTerm) ||
        item.coBorrower.toLowerCase().includes(searchTerm) ||
        item.sanctionAmount.toLowerCase().includes(searchTerm) ||
        item.status.toLowerCase().includes(searchTerm)
      )) ||
      (selectedColumn === "Loan Type" && item.loanType.toLowerCase().includes(searchTerm)) ||
      (selectedColumn === "Borrower" && item.borrower.toLowerCase().includes(searchTerm)) ||
      (selectedColumn === "Co-Borrower" && item.coBorrower.toLowerCase().includes(searchTerm)) ||
      (selectedColumn === "Sanction Amount" && item.sanctionAmount.toLowerCase().includes(searchTerm)) ||
      (selectedColumn === "Status" && item.status.toLowerCase().includes(searchTerm));

    const matchesFilter = selectedFilter === "All" || item.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="content-wrapper">
        <h1 className="mobile-title">Portfolio</h1>
      <div className="controls">
        <div className="filters">
          {["All", "Active", "NPA", "Closed", "Overdue"].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${selectedFilter === filter ? "active" : ""}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="search-filter-container">
          <input
            type="text"
            placeholder="Search for loans"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="filter-group">
            <select className="select-columns" onChange={(e) => setSelectedColumn(e.target.value)}>
              <option value="All">Select Column</option>
              <option value="Loan Type">Loan Type</option>
              <option value="Borrower">Borrower</option>
              <option value="Co-Borrower">Co-Borrower</option>
              <option value="Sanction Amount">Sanction Amount</option>
              <option value="Status">Status</option>
            </select>

            <button className="more-filters">More Filters</button>
          </div>
        </div>
      </div>

      <table className="portfolio-table">
        <thead>
          <tr>
            <th>Loan No.</th>
            <th>Loan Type</th>
            <th>Borrower</th>
            <th>Co-Borrower</th>
            <th>Sanction Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.loanNo}>
                <td>{item.loanNo}</td>
                <td>{item.loanType}</td>
                <td>{item.borrower}</td>
                <td>{item.coBorrower}</td>
                <td>{item.sanctionAmount}</td>
                <td>{item.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-results">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
