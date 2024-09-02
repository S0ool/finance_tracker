import {useState} from "react";
import Category_item from "./category_item.jsx";
function add_time(){
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    let month = currentDate.getMonth() + 1
    let day = currentDate.getDate()
    if (month<10){
      month = `0${month}`
    }
    if(day<10){
      day = `0${day}`

    }
    return `${day}-${month}-${year}`
  }
export default function Main({
                             balance,categories,maxCategory,maxExpense,maxProfit,
                             setMaxProfit,setMaxExpense,setMaxCategory,
                             setProfits,setExpenses,profits,expenses}){
    function draw_options(category){
        return(
            <>
                <option value={category.id}>{category.name}</option>
            </>
        )
    }
    function add_profit(event){
        event.preventDefault()
        const new_profit = {
                name:event.target.elements['name'].value,
                amount:Number(event.target.elements['amount'].value),
                date:add_time()
            }
        setProfits([...profits,new_profit])
    }
    function add_expenses(event){
        event.preventDefault()
        console.log(categories.find((e)=>{
                        if (e.id == event.target.elements['category'].value)
                            return e.id
                    }))


        const new_expenses = {
                    name:event.target.elements['name'].value,
                    amount:Number(event.target.elements['amount'].value),
                    date:add_time(),
                    category:categories.find((e)=>e.id == event.target.elements['category'].value).id
        }
        setExpenses([...expenses,new_expenses])
    }

    return (
        <div className={'main'}>
            <div className={'balanceBlock'}>
                <h2>My balance💰</h2>
                <p>{balance}$</p>
            </div>
            <div>
                <div className={'max_block'}>
                    <h5
                        style={{backgroundColor: 'green'}}
                    >MAX PROFIT: {maxProfit}$</h5>
                    <h5
                        style={{backgroundColor: 'red'}}
                    >MAX EXPENSE: {maxExpense}$</h5>
                    <h5
                        style={{backgroundColor: 'blue'}}
                    >MAX CATEGORY: {maxCategory}$</h5>
                </div>
                <div className={'category_block'}>
                    <Category_item category={categories[0]}/>
                    <Category_item category={categories[1]}/>
                    <Category_item category={categories[2]}/>
                </div>
                <div className={'category_block'}>
                    <Category_item category={categories[3]}/>
                    <Category_item category={categories[4]}/>
                    <Category_item category={categories[5]}/>
                </div>
                <div className={'category_block'}>
                    <Category_item category={categories[6]}/>
                </div>
            </div>
            <div className={'add_profit_block'}>
                <form action="" onSubmit={()=>add_profit(event)}>
                    <input name={'name'} type="text" placeholder={'Profit'}/>
                    <input name={'amount'} type="number" placeholder={'0'}/>
                    <button>Add new profit</button>
                </form>
            </div>
            <div className={'add_profit_block'} id={'add_expense_block'}>
                <form action="" onSubmit={()=>add_expenses(event)}>
                    <input name={'name'} type="text" placeholder={'Expense'}/>
                    <input name={'amount'} type="number" placeholder={'0'}/>
                    <select name={'category'}>
                        {categories.map((e,key)=>draw_options(e))}
                    </select>
                    <button>Add new profit</button>
                </form>
            </div>
        </div>
    )
}