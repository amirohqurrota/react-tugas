import {Component} from 'react' ;
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import ListTodo from './ListTodo';
import { useState } from 'react';
import './home.css'

const initialValue=[
    {
        id: uuidv4(),
        title:"Mengerjakan Exercise",
        completed: true
    },
    {
        id: uuidv4(),
        title:"Mengerjakan Task",
        completed: false
    },
    {
        id: uuidv4(),
        title:"Mengerjakan Lainnya",
        completed: true
    },
    
]


function Home (){
    const [data, setData] = useState(initialValue);
    console.log(data)
    const deleteTodo=(id)=>{
        setData((oldData)=>[...data.filter((item)=>{
            return item.id !== id;
        })])
        // const newListTodo = this.state.data.filter((item)=>item.id != id)
        // this.setState({data : newListTodo})
    }

    const addTodo=(newUser)=>{
        const newTodo={id:uuidv4(), ...newUser}
        setData((oldData)=>[...data, newTodo])
    }
    const updateTodo = (id) => {
        let index = data.findIndex(item => item.id === id)
        let updatedData = [...data]
        updatedData[index].completed=!updatedData[index].completed
        setData(updatedData)
        
        // updatedData[index].completed = !updatedData[index].completed
    }



    return(
        <div className='container'>
            <h1>todos</h1>
            <div className="inputArea">
                <InputTodo addTodo={addTodo}/>
                <ListTodo data = {data} deleteTodo={deleteTodo} addTodo={addTodo} updateTodo={updateTodo}/>
            </div>
            
        </div>
    )
}

export default Home