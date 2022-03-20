import ExpanseDate from "./ExpanseDate";
import './ExpenseItem.css';
import Card from '../UI/Card'

function ExpenseItem(props) {
    const clickHandler = () => {
        console.log('Clicked!!!')
    };

    return (
        <Card className="expense-item">
            <ExpanseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    )
}

export default ExpenseItem;