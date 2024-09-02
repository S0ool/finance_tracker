import Profit from "./profit.jsx";

export default function Profits({profits,setProfits}){
    function totalAmount(){
        let total = 0
        for (let e of profits){
            total+=e.amount
        }
        return total
    }
    return(
        <div className={'profits_block'}>
            <h1>PROFITS ARTICLES:</h1>
            {profits.map((e,key)=><Profit profits={profits} setProfits={setProfits} key={key} profit={e}/>)}
            <div className={'total'}>TOTAL PROFIT AMOUNT = {totalAmount()} $</div>
        </div>
    )
}