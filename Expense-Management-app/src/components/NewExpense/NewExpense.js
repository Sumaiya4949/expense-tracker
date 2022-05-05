import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuidv4 } from "uuid";

const NewExpense = (props) => {
  const { onAddData } = props;

  const saveFormData = (data) => {
    const newExpense = {
      ...data,
      id: uuidv4(),
    };

    console.log(newExpense);
    onAddData(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onDataSave={saveFormData} />
    </div>
  );
};
export default NewExpense;
