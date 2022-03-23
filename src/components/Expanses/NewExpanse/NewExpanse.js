import './NewExpanse.css'
import ExpanseForm from "./ExpanseForm";
import expanseDate from "../ExpanseDate";

function NewExpanse(props) {

    const saveExpanseDataHandler = function (enteredExpanseDate) {
        const expanseData = {
            ...enteredExpanseDate,
        }
        props.onAddExpanse(expanseData)
    }

    return <div className="new-expense">
        <ExpanseForm onSaveExpanseData={saveExpanseDataHandler}/>
    </div>
}

export default NewExpanse