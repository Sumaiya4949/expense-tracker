import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const { items } = props;
  const [year, setYear] = useState("2020");

  const getYearValue = (year) => {
    setYear(year);
  };

  const renderExpenseItem = (item) => {
    return (
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        key={item.id}
      />
    );
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearChange={getYearValue} selectedYear={year} />
        {items.map(renderExpenseItem)}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />

        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
