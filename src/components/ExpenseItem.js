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
            </div>
        </div>
        
    )
}

export default ExpanseItem;