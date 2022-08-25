import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import { useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2025, 3, 12),
  },
  { id: "e3", title: "Rent", amount: 66, date: new Date(2022, 6, 16) },
  { id: "e4", title: "School", amount: 166, date: new Date(2022, 2, 115) },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
