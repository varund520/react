import './ExpenseItem.css';

function ExpenseItem(props){
    return(
        <div className="expense-item">
            <div>March 12th 2021</div>
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">${ props.price }</div>

                <div>this is the test</div>
                <div>this is branch test</div>

            </div>
        </div>
    );
}

export default ExpenseItem;

