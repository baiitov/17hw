// import ExpenseItem from "./ExpenseItem";
import React from 'react';

import  './Expense.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props){
    const [filteredYear, setFilteredYear] = useState('2022')

    const filterChangeHandler =(selectedYear)=>{
       setFilteredYear(selectedYear)
    }

    const filteredExpenses= props.data.filter((expense) =>{
        return expense.date.getFullYear().toString() === filteredYear
    })

    // let expensesContent = <p>no Expenses found </p>
    // if(filteredExpenses.length>0){
    //     expensesContent = filteredExpenses.map((el)=>{
    //         return(
    //             <ExpenseItem  
    //             key={el.id}
    //             title={el.title}
    //             amount={el.amount}
    //             date={el.date}

    //             />
    //         )
    //     })
    // }
    // if(filteredYear ==="All"){
    //     expensesContent = props.data.map((el)=>{
    //         return (
    //           <ExpenseItem 
    //           key={el.id} 
    //           title={el.title} 
    //           amount={el.amount} 
    //           date={el.date} />                )
    //    })}
    
    

    return(
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses} expensesYear={filteredYear} expensesData={props.data} />
            {/* SECOND VERSION */}
            {/* {filteredExpenses.length === 0 && props.data.length === 0  && <p>no EXpense found</p>
            }
            {filteredExpenses.length > 0 &&  filteredExpenses.map((el,index,array) => {
                return (
                        <ExpenseItem 
                        key={el.id} 
                        title={el.title} 
                        amount={el.amount} 
                        date={el.date} />                )
            })} 
                     {filteredYear ==="All" && props.data.map((el)=>{
                          return (
                            <ExpenseItem 
                            key={el.id} 
                            title={el.title} 
                            amount={el.amount} 
                            date={el.date} />                )
                     })} */}
            </Card>
    )
    

}


export default Expense
