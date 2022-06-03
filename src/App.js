import ExpanseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    { id: 'e1', title: "Toilet Paper", amount: 94.12, date: new Date(2021,2,12) },
    { id: 'e2', title: "Car Insurance", amount: 294.67, date: new Date(2025,3,12) },
    { id: 'e3', title: "Rent", amount: 66, date: new Date(2022,6,16) },
    { id: 'e4', title: "Rent", amount: 166, date: new Date(2022,2,115)},
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpanseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpanseItem>
      <ExpanseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpanseItem>
      <ExpanseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpanseItem>
      <ExpanseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpanseItem>
    
    </div>
  );
}

export default App;
