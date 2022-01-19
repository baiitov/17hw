import './ExpenseDate.css'

function ExpenseDate(props) {
	const expDate = props.date
	const month = expDate.toLocaleString('en-Us', { month: 'long' })
	const day = expDate.toLocaleString('en-Us', { day: '2-digit' })
	const year = expDate.getFullYear()
	return (
		<div className='expense-date'>
			<div className='date'>{month}</div>
			<div className='date'>{day}</div>
			<div className='date'>{year}</div>
		</div>
	)
}

export default ExpenseDate
