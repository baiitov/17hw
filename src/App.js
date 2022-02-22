import './App.css'
import Card from './components/UI/Card'
import Expense from './components/Expenses/Expense'
import NewExpenses from './components/NewExpenses/NewExpenses'
import { useCallback, useEffect, useState } from 'react'
import Loading from './components/UI/Loading'
import Alerts from './components/UI/Alerts'
import NoAlert from './components/UI/NoAlert'
// const initState = [
// 	{
// 		id: 'e1',
// 		title: 'toilet paper',
// 		amount: 1.5,
// 		date: new Date(2023, 7, 14),
// 	},
// 	{
// 		id: 'e2',
// 		title: 'car',
// 		amount: 2000,
// 		date: new Date(2024, 2, 28),
// 	},
// 	{
// 		id: 'e3',
// 		title: 'iphone',
// 		amount: 1000,
// 		date: new Date(2023, 6, 12),
// 	},
// 	{
// 		id: 'e4',
// 		title: 'redmi',
// 		amount: 300,
// 		date: new Date(2022, 9, 5),
// 	},
// ]
// const addExpenseDataHandler = (expense) => {
	// 	setExpenses((prevState) => {
	// 		return [expense, ...prevState]
	// 	})
	// }
function App() {
	const [expenses, setExpenses] = useState([])

	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [alert, setAlert] = useState(false)

	const fetchExpenseHandler = useCallback(async () => {
		setIsLoading(true)
		try {
			const response = await fetch(
				'https://hom-work17-default-rtdb.firebaseio.com/expense.json',
			)
			if (!response.ok) {
				throw new Error('something went wrong')
			}
			const data = await response.json()
			const loadedMovies = []
			for (const key in data) {
				loadedMovies.push({
					id: key,
					title: data[key].title,
					amount: data[key].amount,
					date: new Date(data[key].date),
				})
			}

			setExpenses(loadedMovies)
		} catch (error) {
			setError(error.message)
		}
		setIsLoading(false)
	}, [])
	async function addMoviesHandler(expense) {
		
		const response = await fetch(
			'https://hom-work17-default-rtdb.firebaseio.com/expense.json',
			{
				method: 'POST',
				body: JSON.stringify(expense),
				headers: {
					'Content-type': 'application/json',
				},
			},
		
		
		)
		const data = await response.json()
		console.log(data)
		setAlert(true)
		fetchExpenseHandler()
	
	}

	useEffect(() => {
		fetchExpenseHandler()
	}, [fetchExpenseHandler])
  
	let content = <p>found no movies</p>
	if (expenses.length > 0) {
		content = <Expense data={expenses} />
	}
	if (error) {
		content = <p className='alert'><NoAlert/></p>
	}
	if (isLoading) {
		content = <div><Loading/></div>
	}
     setTimeout(()=>{
setError(false)
	 },5000)
	setTimeout(() => {
		setAlert(false)
	}, 4000);

	return (
		<Card className='App'>
			
			{alert&&<Alerts>{alert}</Alerts>}
			<NewExpenses
				// onAddExpense={addExpenseDataHandler}
				addMoviesHandler={addMoviesHandler}
				
			/>
			
			{content}
		</Card>
	)
}

export default App
