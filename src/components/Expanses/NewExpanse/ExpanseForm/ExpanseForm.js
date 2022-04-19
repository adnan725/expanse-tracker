import React, { useState } from "react";
import './ExpanseFrom.css'

function ExpanseForm(props) {

    /////////////////// All 'stets' are defined separately ////////////////////

     const [enteredTitle, setEnteredTitle] = useState('')
     const [enteredAmount, setEnteredAmount] = useState('')
     const [enteredDate, setEnteredDate] = useState('')

    /////////////////// All 'stets' are defined as a one in one object ////////////////////

  /* const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })
*/
    const titleChangeHandler = function (event) {
         setEnteredTitle(event.target.value);
       // setUserInput((prevState) => {
        //   return {...prevState, enteredTitle: event.target.value}
     //   })
    }

    const amountChangeHandler = function (event) {
         setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = function (event) {
         setEnteredDate(event.target.value)
    }

    const submitHandler = function (e) {
        e.preventDefault();

        const expanseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpanseData(expanseData)
            // set this data back to 'empty string' again to clear the field and assign them to 'value' property in Input field
        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
    }


    return <div>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expanse</button>
            </div>
        </form>
    </div>
}

export default ExpanseForm