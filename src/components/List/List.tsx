import React, { useState } from 'react'
import AddItem from '../AddItem/AddItem'
import Task from '../Task/Task'
import './List.css'

const List = () => {

    const [items, setItems] = useState<string[]>(['Task 1', 'Task 2', 'Task 3'])

    const addTask = (task:string) => {
        setItems(items => [...items, task])
    }
    

  return (
    <>
    <div>
        <AddItem handleAdd={addTask}/>
        <div className='list'>
        {items.map((elem, index)=>
            <Task key={index} text={elem}/>
        )}
        </div>
    </div>
    </>
  )
}

export default List