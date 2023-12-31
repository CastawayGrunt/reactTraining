import "./App.css";
import Expense from "./components/Expense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e3",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e4",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
  ];

  return (
    <div>
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
