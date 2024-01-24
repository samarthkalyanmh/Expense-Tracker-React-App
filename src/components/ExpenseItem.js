import './ExpenseItem.css'

function ExpenseItem() {
const expenseDate = new Date(2021, 4, 4);
console.log(expenseDate)
const expenseTitle = 'Insurance'
const expenseAmount = 298
const location = 'CTA'

  return (
    <div className='expense-item'>
      <div>{expenseDate.toLocaleDateString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}- {location}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;
