import {createSlice} from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name: 'todo',
    initialState: {
        todos:[]
    },
    reducers:{
        add_todo:(state,action)=>{
            const newTodo={
                id:new Date().getTime().toString(),
                data:action.payload
            }
            state.todos.push(newTodo)
        },
        delete_todo:(state,action)=> {
            state.todos = state.todos.filter(elem => elem.id !== action.payload)
        },
        remove_all:(state)=>{
            state.todos=[]
        }
    }
});

export const {add_todo,delete_todo,remove_all} = todoSlice.actions
export  default todoSlice.reducer