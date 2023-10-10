import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

//arrow function
const ExpenseItem: React.FC<{
  title: string;
  amount: number;
  date: Date;
}> = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;

// standard function
// function ExpenseItem(props: any) {
//   return (
//     <div className="expense-item">
//       <div>{props.date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//     </div>
//   );
// }
