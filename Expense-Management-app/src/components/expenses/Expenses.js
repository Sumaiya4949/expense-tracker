import Card from "../UI/Card";
import "../expenses_css/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import { ExpenseList } from "./ExpenseList";
import { Fragment } from "react/cjs/react.production.min";

const Expenses = (props) => {
  const { items } = props;
  const initialYear = new Date("July 20, 69 00:20:18");

  const [filteredYear, setFilteredYear] = useState(
    initialYear.getFullYear().toString()
  );

  const yearChangeHandler = (currentYear) => {
    setFilteredYear(currentYear);
  };

  const filteredExpense = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Fragment>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={yearChangeHandler}
          selectedYear={filteredYear}
        />
        <ExpenseList items={filteredExpense} />
      </Card>
    </Fragment>
  );
};

export default Expenses;
