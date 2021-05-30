import React, {useState} from 'react';

import ExpensesList from "./ExpensesList";
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020')

    const filterYear = year => {
        setSelectedYear(year)
    }
    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    })



  return (
      <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onYearSelected={filterYear}/>
                <ExpensesChart expenses={filteredExpense}/>
                <ExpensesList items={filteredExpense}/>
            </Card>
      </div>
  );
}

export default Expenses;
