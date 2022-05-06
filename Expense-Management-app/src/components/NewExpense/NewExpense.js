import "../expenses_css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const NewExpense = (props) => {
  const { onAddData } = props;

  const [isClicked, setClickStatus] = useState(false);

  const saveFormData = (data) => {
    const newExpense = {
      ...data,
      id: uuidv4(),
    };

    console.log(newExpense);
    onAddData(newExpense);
  };

  const changeClickStatus = (data = true) => {
    setClickStatus(data);
  };

  return (
    <div className="new-expense">
      {!isClicked && (
        <button onClick={changeClickStatus}>Add New Expense</button>
      )}
      {isClicked && (
        <ExpenseForm
          onDataSave={saveFormData}
          onAddButtonClick={changeClickStatus}
        />
      )}
    </div>
  );
};
export default NewExpense;
