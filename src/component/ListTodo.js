import ItemToDo from "./ItemToDo"
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/TodoSlice";

const ListTodo = () =>{
    const todoItem= useSelector((state)=> state.todoData.todoDatas)
    // console.log(todoItem)
    const dispatch=useDispatch()
    // const {data, deleteTodo, updateTodo, addTodo} =props

    return(
        <div className="containerTable">
            <table>
                {todoItem.map((todo)=>( <ItemToDo item={todo} deleteTodo={dispatch(deleteTodo(todo.id))} updateTodo={dispatch(updateTodo)} /> ))}
            </table>
        </div>
    )
}

export default ListTodo