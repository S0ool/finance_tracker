import {useState} from "react";
import Main from "./main.jsx";
import Profits from "./profits.jsx";
import Expenses from "./expenses.jsx";

export default function Body(){
    const [balance,setBalance] = useState(135)
    const [maxProfit,setMaxProfit] = useState(2000)
    const [maxExpense,setMaxExpense] = useState(1900)
    const [maxCategory,setMaxCategory] = useState(1900)

    const [categories,setCategories] = useState([
            {
                id:1,
                name:'Food category',
                max_expense:1900
            },
            {
                id:2,
                name:'Home appliance category',
                max_expense:0
            },
            {
                id:3,
                name:'Medicine category',
                max_expense:65
            },
            {
                id:4,
                name:'Travel category',
                max_expense:0
            },
            {
                id:5,
                name:'Shopping category',
                max_expense:400
            },
            {
                id:6,
                name:'Pet care category',
                max_expense:0
            },
            {
                id:7,
                name:'Car service category',
                max_expense:0
            },
        ])
    const [profits,setProfits] = useState([
            {
                id:1,
                name:'Salary',
                amount:2000,
                date:'01-08-2024'
            },
            {
                id:2,
                name:'Website profit',
                amount:500,
                date:'01-08-2024'
            }
        ])
    const [expenses,setExpenses] = useState([
        {
            id:1,
            name:'Food products',
            amount:1900,
            date:'10-08-2024',
            category:1
        },
         {
             id:2,
            name:'Shopping',
            amount:400,
            date:'05-08-2024',
            category:5
        },
         {
             id:3,
            name:'Medicine',
            amount:65,
            date:'01-08-2024',
            category:3
        }
    ])
    return(
        <div className={'body'}>
            <Main
                profits={profits}
                expenses={expenses}
                setMaxProfit={setMaxProfit}
                setMaxExpense={setMaxExpense}
                setMaxCategory={setMaxCategory}
                setProfits={setProfits}
                setExpenses={setExpenses}
                balance={balance}
                categories={categories}
                maxProfit={maxProfit}
                maxExpense={maxExpense}
                maxCategory={maxCategory}
            />
            <Profits profits={profits} setProfits={setProfits}/>
            <Expenses expenses={expenses} categories={categories} setExpenses={setExpenses}/>
        </div>
    )
}