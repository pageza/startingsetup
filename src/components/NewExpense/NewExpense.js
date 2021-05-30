import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditing = () => {
        setIsEditing(false)
    }
    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onCancel={stopEditing} onSaveExpenseData={SaveExpenseDataHandler}/>}
    </div>
}

export default NewExpense
