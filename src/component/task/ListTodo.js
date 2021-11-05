import ItemToDo from "./ItemToDo"

const ListTodo = (props) =>{
    const {data, deleteTodo, updateTodo, addTodo} =props

    return(
        <div className="containerTable">
            <table>
                {data.map((todo)=>( <ItemToDo item={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} /> ))}
            </table>
        </div>
    )
}

export default ListTodo