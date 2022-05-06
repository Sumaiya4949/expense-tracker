import "../expenses_css/ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

export const ExpenseList = (props) => {
  const { items } = props;

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

  if (items.length === 0) {
    return <div className="expenses-list__fallback">No Expnese FOund</div>;
  }

  return <li className="expenses-list">{items.map(renderExpenseItem)}</li>;
};
