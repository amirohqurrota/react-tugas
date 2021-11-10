

function ItemTodo (props){
    
    let title
    const deleteData= () => {
        props.deleteTodo(props.item.id)}

    const onChangeFunc = e => {
        props.updateTodo(props.item.id)
    }
    if (props.item.completed) {
        title = <del>{props.item.title}</del>
        
    } else {
        title = props.item.title
    }

    return(
        <tr>
            <td><input type="checkbox" name="isCompleted" defaultChecked={props.item.completed} onChange={onChangeFunc}/></td>
            <td>{title}</td>
            <td className="tdButton"><button onClick={deleteData}>Hapus</button></td>
        </tr>
    )
}

export default ItemTodo