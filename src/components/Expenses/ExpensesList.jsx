import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
const ExpensesList =(props) =>{
    //    if(props.expenses.length === 0 ){
    //        return <h2 className='expenses-list__fallback'>no expenses found</h2>
    //    }
    let expensesContent = <p>no Expenses found </p>

       if(props.expenses.length>0){
            expensesContent = props.expenses.map((el)=>{
                return(
                    <ExpenseItem  
                    key={el.id}
                    title={el.title}
                    amount={el.amount}
                    date={el.date}
    
                    />
                )
            })
        }
        if(props.expensesYear ==="All"){
            expensesContent = props.expensesData.map((el)=>{
                return (
                  <ExpenseItem 
                  key={el.id} 
                  title={el.title} 
                  amount={el.amount} 
                  date={el.date} /> 
          )
        })}

       return <ul className='expenses-list'>
              {expensesContent}    
       </ul>
}
export default ExpensesList