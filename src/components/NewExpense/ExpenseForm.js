import {useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // Using individual State slices
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // Using one State for all inputs
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        // Using individual State slices
        setEnteredTitle(event.target.value)

        // Using one State slice for the form inputs
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // Better way to update State when relying on the previous values in State
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })

        // setUserInput({
        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value}
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })

        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value}
        // })
    }

    const submitHandle = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData)

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }


    return <form onSubmit={submitHandle}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm
