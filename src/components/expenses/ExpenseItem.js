import React, { useState } from 'react';
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const onClickHandler = () => {
    setTitle('Update');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={onClickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
