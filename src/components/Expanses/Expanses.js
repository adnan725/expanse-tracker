import React, { useState } from 'react';
import ExpenseItem from "./ExpanseItem/ExpenseItem";
import ExpensesFilter from "./NewExpanse/ExpanseFilter/ExpensesFilter";
import './Expanses.css'
import Card from "../UI/Card";
import ExpansesList from "./ExpansesList";
import ExpansesChart from "./ExpansesChart";

function Expanses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = function (selectedYear) {
        setFilteredYear(selectedYear)
    }

    const filteredExpanses = props.items.filter(expanse => {
        return expanse.date.getFullYear().toString() === filteredYear
    })


    return <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpansesChart expanses={filteredExpanses}/>
            <ExpansesList items={filteredExpanses}/>
        </Card>
    </div>
}

export default Expanses;