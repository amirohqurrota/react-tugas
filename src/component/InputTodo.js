
import React, { Component, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from '../store/TodoSlice';

function ListInput (props){
    const dispatch = useDispatch()

    const [itemList, setItemList] = useState({
        title: "",
        completed:false
    })
    
    const onChange = e => {
        setItemList({...itemList,
            [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        const isNotEmpty = itemList.title
        if (isNotEmpty) {
            const newItem = { 
                title: itemList.title,
            }
            dispatch(addTodo(newItem))
            // props.addTodo(newItem)
            itemList.title=""
        } else {
            alert('Todo cant be empty')
        }
    }
    
    return (
        <div className="containerInput">
            <input className="teksInput" type="text" value={itemList.title} name="title" placeholder="Masukkan todo baru" onChange={onChange}/>
            <button className="buttonInput" onClick={onSubmit}>Tambah</button>
        </div>
    )
}

export default ListInput