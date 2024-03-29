import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // First approach
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


  // Second approach
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    //setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
     setEnteredTitle(event.target.value);
    // console.log(enteredTitle)
    // another way
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value}
    // });
  };

  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value 
    // });
    // console.log(event.target.value)
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };
   // console.log(expenseDate)

    props.onSaveExpenseData(expenseDate);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
           type="text"
           value={enteredTitle} 
           onChange={titleChangeHandler} 
           />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
        <div type="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="sumbit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
