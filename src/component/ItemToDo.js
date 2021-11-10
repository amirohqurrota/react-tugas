import {deleteTodo, updateTodo} from "../store/TodoSlice"
import { useDispatch } from "react-redux"

function ItemTodo (props){
    console.log(props.item)
    let title
    const dispatch = useDispatch()
    console.log(props.item)
    if (props.item.completed) {
        title = <del>{props.item.title}</del>
        
    } else {
        title = props.item.title
    }

    return(
        <tr>
            <td><input type="checkbox" name="isCompleted" defaultChecked={props.item.completed} onChange={props.item.id}/></td>
            <td>{title}</td>
            <td className="tdButton"><button onClick={() => dispatch(props.deleteTodo(props.item.id))}>Hapus</button></td>
        </tr>
    )
}

export default ItemTodo