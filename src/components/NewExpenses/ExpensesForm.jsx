import {useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props)=>{

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     title:'',
    //     amount:'',
    //     date:'',
    // })
    // const inputChangeHandler =(event)=>{
    //    const currentInput = event.target.name;
    //    setUserInput({
    //        ...userInput,
    //        [currentInput]: event.target.value,

    //    })
    // }

    const inputChangeHandler = (event)=>{
     const currentInput = event.target.name;
       if(currentInput==='title'){
           setTitle(event.target.value)
       }else if(currentInput==='amount'){
           setAmount(event.target.value)
           }else if (currentInput==='date'){
               setDate(event.target.value)
           }
       
    }
    // const titleChangeHandler= (event)=>{
    
    // setUserInput ((prevState)=>{
    //     return{
    //         ...prevState,
    //       title:event.target.value,

    //     }
    // })
    // }
    // const amountChangeHandler = (event)=>{
    //     setUserInput({
    //         ...userInput,
    //       amount: event.target.value,
    //     })
      

    // }
    // const dateChangeHandler=(event)=>{
    //     setUserInput({
    //         ...userInput,
    //         date:event.target.value,
    //     })
     
    // }
    const submitHandler=(event)=>{
        event.preventDefault()
        // console.log(userInput)
        const currentData={
            title,
            amount,
            date:new Date (date),
        }
        props.onSaveExpenseData(currentData)
    }
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>title</label>
                <input name='title' type="text" onChange={inputChangeHandler} />
            </div>
            <div className='new-expense__control'>
            <label>amout</label>
                <input name='amount' onChange={inputChangeHandler} type="number" />
            </div>
            <div className='new-expense__control'>
            <label>date</label>
                <input name='date' onChange={inputChangeHandler} type="date"min="2022-01-01" />
            </div>

        </div>
        <div className='new-expense__actions'>
            <button type='submit'>add Expense</button>
        </div>
    </form>
    
}
export default ExpenseForm