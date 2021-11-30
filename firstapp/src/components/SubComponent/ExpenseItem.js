
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props){
    let date = props.date;
    return(
        <div className="expense-item">            
            <div className="expense-item__description">
                <h2><ExpenseDate
                   date = {date}
                 >
                    </ExpenseDate>
                </h2>
                <h2>{ props.title }</h2>
                <div className="expense-item__price">${ props.price }</div>
            </div>
        </div>
    );
}

export default ExpenseItem;