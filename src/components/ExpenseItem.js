import './ExpenseItem.css';

function ExpenseItem() {
    const expanseDate = new Date()
    const expanseTitle = 'Car insurance'
    const expansePrice = 257.95
    return (
        <div className="expense-item">
            <div>{expanseDate.toISOString().slice(0, 10)}</div>
            <div className="expense-item__description">
                <h2>{expanseTitle}</h2>
                <div className="expense-item__price">${expansePrice}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;