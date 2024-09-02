export default function Expense({expense,category,expenses,setExpenses}){
    function delete_expense(){
        console.log()
        let new_expenses = expenses.filter((e)=>expense.id!=e.id)
        console.log(new_expenses)
        setExpenses(new_expenses)
    }
    // console.log(category)
    return(
        <>
            <div className={'profit'} id={'expense'}>
                <div>
                    <div className={'salary'}>{expense.name} = {expense.amount}$</div>
                    <p>{category.name}</p>
                    <p>{expense.date}</p>
                </div>
                <div>
                    <button onClick={delete_expense}>Delete</button>
                </div>
            </div>
        </>
    )
}