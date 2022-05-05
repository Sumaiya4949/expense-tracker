import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const { onYearChange, selectedYear } = props;

  const onChangeHandler = (event) => {
    const { value } = event.target;
    onYearChange(value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onChangeHandler}>
          <option value={selectedYear}>2022</option>
          <option value={selectedYear}>2021</option>
          <option value={selectedYear}>2020</option>
          <option value={selectedYear}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
