export default function Category_item({category}){
    function top(text){
        let new_text = ''
        for (let i of text){
            new_text+=i.toUpperCase()
        }
        return new_text
    }
    return(
        <>
            <div>
                {top(category.name)}:{category.max_expense}$
            </div>
        </>
    )

}