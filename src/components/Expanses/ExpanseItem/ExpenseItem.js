import React from "react";
import ExpanseDate from "../ExpanseDate/ExpanseDate";
import './ExpenseItem.css';
import Card from '../../UI/Card'



function ExpenseItem(props) {

    return (
        <li>
            <Card className="expense-item">
                <ExpanseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                    {console.log(props.amount)}
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;
