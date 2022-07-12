import React from 'react'
import { useSelector } from 'react-redux'

import styles from './List.module.css'
const TodoList = () => {
   const {TodoList}=useSelector(Store=>Store)
  return (
    <div className={styles.maindiv}>
    <h3>List Of Task</h3>
    {
      
        TodoList.map((item)=>(
            <div className={styles.list} key={item.id}>
           <ul>
           <li> Task:{item.Task} </li>
               <ul>
                  <li>{item.time}</li>             
               </ul>
           </ul>
           
            </div>
        ))
    }
    
    
    </div>
  )
}

export default TodoList