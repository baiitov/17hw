import ExpenseItem from "./ExpenseItem";
import  './Expense.css'
import Card from "../UI/Card";

function Expense(props){
    return(
        <Card className='expenses'>
            {props.data.map((el,index,array) => {
                return (
                        <ExpenseItem 
                        key={index} 
                        title={el.title} 
                        amount={el.amount} 
                        date={el.date} />                )
            })}
        </Card>
    )
    

}


export default Expense
