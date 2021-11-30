import Expenses from "./components/SubComponent/Expenses";
function App(){
    let Expensesdata = [
        {   
            date  : "08/11/1997",
            title : "rent",
            price : "100"
        },

        {   
            date  : "09/11/1997",
            title : "School fee",
            price : "200"
        },

        {   
            date  : "10/11/1997",
            title : "Food",
            price : "150"
        }
    ];

    return (
            <div>
                <h2>Let's Get Started</h2>
                    <Expenses
                      item={Expensesdata}
                    ></Expenses>
            </div>
    );
}

export default App;