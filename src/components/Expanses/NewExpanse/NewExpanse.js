import React, { useState } from "react";
import './NewExpanse.css'
import ExpanseForm from "./ExpanseForm/ExpanseForm";
import expanseDate from "../ExpanseDate/ExpanseDate";

function NewExpanse(props) {
    const [isEditing, setIsEditing] = useState(false)
    const startEditingHandler = function () {
        setIsEditing(true)
    }

    const saveExpanseDataHandler = function (enteredExpanseDate) {
        const expanseData = {
            ...enteredExpanseDate,
        }
        props.onAddExpanse(expanseData)
        setIsEditing(false)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }


    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expanse</button>}
        {isEditing && <ExpanseForm
            onSaveExpanseData={saveExpanseDataHandler}
            onCancel={stopEditingHandler}
        />}
    </div>
}

export default NewExpanse