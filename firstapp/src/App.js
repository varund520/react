import ExpenseItem from "./components/SubComponent/ExpenseItem";

function App(){
    let data = [
        {   
            date  : "29-Nov-2021",
            title : "rent",
            price : "100"
        },

        {   
            date  : "29-Nov-2021",
            title : "School fee",
            price : "200"
        },

        {   
            date  : "29-Nov-2021",
            title : "Food",
            price : "150"
        }
    ];

    return (
            <div>
                <h2>Let's Get Started</h2>
                <ExpenseItem
                date  = { data[0].date  }
                title = { data[0].title }
                price = { data[0].price }
                >
                </ExpenseItem>

                <ExpenseItem
                date  = { data[1].date  }
                title = { data[1].title }
                price = { data[1].price }
                >
                </ExpenseItem>

                <ExpenseItem
                date  = { data[2].date  }
                title = { data[2].title }
                price = { data[2].price }
                >
                </ExpenseItem>

            </div>
    );
}

export default App;