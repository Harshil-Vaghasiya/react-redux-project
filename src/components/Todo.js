import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {add_todo, delete_todo,remove_all} from "../redux/todoSlice";

const Todo=()=>{
    const [data,setData]=useState('')
    const todo=useSelector(state=>state.todo.todos)
    const dispatch=useDispatch()
    // console.log(todo)
    return(
        <>
            <h1>Todo list</h1>
           <div className='mainDiv'>
               <input
                   type='text'
                   value={data}
                onChange={e=>setData(e.target.value)}
               />
               <button
                   style={{marginLeft:"10px"}}
               onClick={()=>dispatch(add_todo(data),setData(''))}
               > add</button>
           </div>
            {
                todo.map(elem=>{
                    return(
                        <div key={elem.id} className='resultDiv'>
                            <h3>{elem.data}</h3>
                            <button
                                className='deleteBtn'
                            onClick={()=>dispatch(delete_todo(elem.id))}
                            >delete</button>
                        </div>
                    )
                })
            }
            { todo.length > 1 && <button
                style={{marginTop: "20px"}}
                onClick={()=>dispatch(remove_all())}
            >Remove All</button>}
        </>
    )
}

export default Todo;