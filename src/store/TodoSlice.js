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

export const TodoSlice = createSlice({
    name: "todoData",
    initialState:{
        todoDatas: initialValue
    },
    reducers: {
        deleteTodo: (state, action)=>{
            state.todoDatas=state.todoDatas.filter((item) => {
                return item.id !== action.payload;
            })
        },
        addTodo: (state, action)=>{
            const newData = {
                id: uuidv4(),
                ...action.payload,
            };
            state.todoDatas= [...state.todoDatas, newData]
        },
        updateTodo: (state, action)=>{
            let index = state.todoDatas.findIndex(item => item.id === action.payload)
            let updatedData = [...state.todoDatas]
            updatedData[index].completed=!updatedData[index].completed
            state.todoDatas=updatedData
        },
    },
})

export const {deleteTodo, addTodo, updateTodo}= TodoSlice.actions;
export default TodoSlice.reducer;