import './ExpenseItem.css'

import ExpenseDate from './ExpenseDate.js';

function ExpenseItem(props) {

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}-{props.locationOfExpenditure}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;
