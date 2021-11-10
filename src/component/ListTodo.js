import ItemToDo from "./ItemToDo"
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/TodoSlice";

const ListTodo = (props) =>{
    const todoItem= useSelector((state)=> state.todoData.todoList)
    const dispatch=useDispatch()
    // const {data, deleteTodo, updateTodo, addTodo} =props

    return(
        <div className="containerTable">
            <table>
                {data.map((todo)=>( <ItemToDo item={todoItem} deleteTodo={dispatch(deleteTodo(todoItem.id))} updateTodo={dispatch(updateTodo)} /> ))}
            </table>
        </div>
    )
}

export default ListTodo