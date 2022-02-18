import './App.css'
import Card from './components/UI/Card'
import Expense from './components/Expenses/Expense'
import NewExpenses from './components/NewExpenses/NewExpenses'
import { useState } from 'react'
const initState = [
	{
		id: 'e1',
		title: 'toilet paper',
		amount: 1.5,
		date: new Date(2023, 7, 14),
	},
	{
		id: 'e2',
		title: 'car',
		amount: 2000,
		date: new Date(2024, 2, 28),
	},
	{
		id: 'e3',
		title: 'iphone',
		amount: 1000,
		date: new Date(2023, 6, 12),
	},
	{
		id: 'e4',
		title: 'redmi',
		amount: 300,
		date: new Date(2022, 9, 5),
	},
]
function App() {
	const [expenses, setExpenses] = useState(initState)
	const addExpenseDataHandler = (expense) => {
		setExpenses((prevState) => {
			return [expense, ...prevState]
		})
	}

	return (
		<Card className='App'>
			<NewExpenses onAddExpense={addExpenseDataHandler} />
			<Expense data={expenses} />
		</Card>
	)
}

export default App
