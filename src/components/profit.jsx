export default function Profit({profit,profits,setProfits}){
    function delete_profit(){
        console.log()
        let new_profits = profits.filter((e)=>profit.id!=e.id)
        console.log(new_profits)
        setProfits(new_profits)
    }
    return(
        <div className={'profit'}>
            <div>
                <div className={'salary'}>{profit.name} = {profit.amount}$</div>
                <p>{profit.date}</p>
            </div>
            <div>
                <button onClick={delete_profit}>Delete</button>
            </div>
        </div>
    )
}