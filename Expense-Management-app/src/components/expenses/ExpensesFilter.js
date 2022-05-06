import React from "react";
import "../expenses_css/ExpensesFilter.css";

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
        <select value={selectedYear} onChange={onChangeHandler}>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
