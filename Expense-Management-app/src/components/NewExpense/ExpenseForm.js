import { useState } from "react";
import "../expenses_css/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [entertedTitle, setEnteredTitle] = useState("");
  const [entertedAmount, setEnteredAmount] = useState("");
  const [entertedDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    const { value } = event.target;
    setEnteredTitle(value);
  };

  const amountChangeHandler = (event) => {
    const { value } = event.target;
    setEnteredAmount(value);
  };

  const dateChangeHandler = (event) => {
    const { value } = event.target;
    setEnteredDate(value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: entertedTitle,
      amount: entertedAmount,
      date: new Date(entertedDate),
    };
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
    props.onDataSave(expenseData);
    props.onAddButtonClick(false);
  };

  const onCancelHandler = () => {
    props.onAddButtonClick(false);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              onChange={titleChangeHandler}
              value={entertedTitle}
              type="text"
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              onChange={amountChangeHandler}
              value={entertedAmount}
              type="number"
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              onChange={dateChangeHandler}
              value={entertedDate}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
            />
          </div>
          <div className="new-.new-expense__actions">
            <button onClick={onSubmitHandler} type="submit">
              Add Expense
            </button>
            <button onClick={onCancelHandler}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
