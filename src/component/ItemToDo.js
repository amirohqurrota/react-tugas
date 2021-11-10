import {deleteTodo, updateTodo} from "../store/TodoSlice"
import { useDispatch } from "react-redux"

function ItemTodo (props){
    let title
    const dispatch = useDispatch()
    const deleteData= () => {
        props.deleteTodo(props.item.id)}

    if (props.item.completed) {
        title = <del>{props.item.title}</del>
        
    } else {
        title = props.item.title
    }

    return(
        <tr>
            <td><input type="checkbox" name="isCompleted" defaultChecked={props.item.completed} onChange={() => dispatch(updateTodo(props.item.id))}/></td>
            <td>{title}</td>
            <td className="tdButton"><button onClick={() => dispatch(deleteTodo)}>Hapus</button></td>
        </tr>
    )
}

export default ItemTodo