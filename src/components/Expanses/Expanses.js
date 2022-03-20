import ExpenseItem from "./ExpenseItem";
import './Expanses.css'
import Card from "../UI/Card";

function Expanses(props) {
    return <Card className="expenses">
        <ExpenseItem
            title={props.allExpanses[0].title}
            amount={props.allExpanses[0].amount}
            date={props.allExpanses[0].date}
        />
        <ExpenseItem
            title={props.allExpanses[1].title}
            amount={props.allExpanses[1].amount}
            date={props.allExpanses[1].date}
        />
        <ExpenseItem
            title={props.allExpanses[2].title}
            amount={props.allExpanses[2].amount}
            date={props.allExpanses[2].date}
        />
        <ExpenseItem
            title={props.allExpanses[3].title}
            amount={props.allExpanses[3].amount}
            date={props.allExpanses[3].date}
        />
    </Card>
}

export default Expanses;