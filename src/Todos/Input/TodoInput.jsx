import React from 'react'
import {addTodo} from "../../Redux/action"
import { store } from '../../Redux/store'
import styles from './Input.module.css';

import UseTimer from '../../Time/useTimer';


const TodoInput = () => {
 
   const [data, setData] = React.useState("")
  
   const handleAdd=()=>{
    const payload={
      Task:data,
      time:<UseTimer />
    }
      
       store.dispatch(addTodo(payload));

      setData("")
      
   }

    return (
    <div className={styles.maindiv}>
       <input value={data} placeholder="Enter Task" onChange={(e)=>setData(e.target.value)}/> &nbsp;
      <button onClick={handleAdd}>Add Task</button>
        <br />
        
        <img id={styles.img} src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.urbanyogi.app%2Fimage%2Fraga%2520hansdhwaniii.jpg'/>
   
   
        </div>
  )
}

export default TodoInput