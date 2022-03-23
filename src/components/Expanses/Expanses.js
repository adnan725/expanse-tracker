import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./NewExpanse/ExpensesFilter";
import './Expanses.css'
import Card from "../UI/Card";

function Expanses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = function (selectedYear) {
        setFilteredYear(selectedYear)
    }
    return <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {props.items.map((expanse) => (
                <ExpenseItem
                    title={expanse.title}
                    amount={expanse.amount}
                    date={expanse.date}
                />
            ))}
        </Card>
    </div>
}

export default Expanses;