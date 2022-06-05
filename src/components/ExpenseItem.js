<<<<<<< HEAD
import './ExpanseItem.css'
function ExpanseItem(props) {
    // const expenseDate = new Date(2022,5,24);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.76;
    return (
        <div className='expense-item'>
            <div>
                <div>{props.date.toLocaleString('en-US', {})}</div>
                <div>Year</div>
                <div>Day</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
=======
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
function ExpenseItem(props) {
    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    // const year = props.date.getFullYear();
    return (
        <div className='expense-item'>
           <ExpenseDate date={props.date}/>       
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
>>>>>>> 93d8fef17afdcc9fb4e978594a75b86559a8dab7
            </div>
        </div>
        
    );
}

export default ExpenseItem;