import { useState } from 'react'
import ExpenseForm from './ExpensesForm'
import './NewExpenses.css'

const NewExpenses = (props) => {
	const [modal, setModal] = useState(null)
	// const saveExpenseDataHandler = (expenseData) => {
	// 	const dataWithId = {
	// 		...expenseData,
	// 		id: Math.random().toString(),
	// 	}
	// 	props.onAddExpense(dataWithId)
	// }
	// const ModalHandler = ()=>{
	//  setModal(true)
	// }
	return (
		<div className='new-expense'>
			<ExpenseForm
				// onSaveExpenseData={saveExpenseDataHandler}
				addMoviesHandler={props.addMoviesHandler} 
			/>
		</div>
	)
}
export default NewExpenses
