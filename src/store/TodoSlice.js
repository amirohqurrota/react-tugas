import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";

const initialValue = [
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
    {
        id: uuidv4(),
        title:"Cuci Baju",
        completed: false
    },
];

export const todoSlice =createSlice({
    name: "todoData",
    initialState:{
        todoList: initialValue
    },
    reducers:{
        deleteTodo: (state, action)=>{
            state.todoList=state.todoList.filter((item) => {
                return item.id !== action.payload;
            })
        },
        addTodo: (state, action)=>{
            const newData = {
                id: uuidv4(),
                ...action.payload,
            };
            state.todoList= [...state.todoList, newData]
        },
        updateTodo: (state, action)=>{
            let index = state.todoList.findIndex(item => item.id === action.payload)
            let updatedData = [...state.todoList]
            updatedData[index].completed=!updatedData[index].completed
            state.todoList=updatedData
        }
    }
})

export const {deleteTodo, addTodo, updateTodo}= todoSlice.actions;
export default todoSlice.actions