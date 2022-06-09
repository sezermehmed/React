import Expenses from "./components/Expenses";
function App() {
  const expenses = [
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
    { id: "e4", title: "Rent", amount: 166, date: new Date(2022, 2, 115) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
