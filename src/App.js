import './App.css'
import Card from './components/UI/Card'
import Expense from './components/Expenses/Expense'
import NewExpenses from './components/NewExpenses/NewExpenses'

function App() {
	const expense = [
		{
			id: 'e1',
			title: 'toilet paper',
			amount: 1.5,
			date: new Date(2020, 7, 14),
		},
		{
			id: 'e2',
			title: 'car',
			amount: 2000,
			date: new Date(2021, 2, 28),
		},
		{
			id: 'e3',
			title: 'iphone',
			amount: 1000,
			date: new Date(2019, 6, 12),
		},
    {
			id: 'e4',
			title: 'redmi',
			amount: 300,
			date: new Date(2020, 9, 5),
		},
	]

	return (
		<Card className='App'>
						<NewExpenses/>
			<Expense data={expense} />
		</Card>
	)
}



export default App
