
import { v4 as uuidv4 } from 'uuid';
import ListTodo from '../../component/ListTodo';
import ListInput from '../../component/InputTodo';
import { useState } from 'react';
import './home.css'
import Nav from '../../component/nav';


function Home (){
    // const [data, setData] = useState(initialValue);
    // console.log(data)

    // const addTodo=(newUser)=>{
    //     const newTodo={id:uuidv4(), ...newUser}
    //     setData((oldData)=>[...data, newTodo])
    // }
    // const updateTodo = (id) => {
    //     let index = data.findIndex(item => item.id === id)
    //     let updatedData = [...data]
    //     updatedData[index].completed=!updatedData[index].completed
    //     setData(updatedData)
        
    //     // updatedData[index].completed = !updatedData[index].completed
    // }



    return(
        <div className='container'>
            <h1>todos</h1>
            <div className="inputArea">
                <ListInput/>
                <ListTodo/>
            </div>
            
        </div>
    )
}

export default Home