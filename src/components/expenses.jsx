import Expense from "./expense.jsx";

export default function Expenses({expenses,setExpenses,categories}){
    function totalAmount(){
        let total = 0
        for (let e of expenses){
            total+=e.amount
        }
        return total
    }
    return(
        <div className={'profits_block'} id={'expenses_block'}>
            <h1>EXPENSES ARTICLES:</h1>
            {expenses.map((e, key) => <Expense setExpenses={setExpenses} expenses={expenses} key={key} expense={e} category={categories.find((c)=>{
               if( c.id == e.category)
                   return c
            })}/>)}
            <div className={'total'}>TOTAL EXPENSES AMOUNT = {totalAmount()} $</div>

        </div>
    )
}