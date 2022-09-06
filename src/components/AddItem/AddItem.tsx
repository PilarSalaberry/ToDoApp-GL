import React, { useState } from 'react'
import './AddItem.css'

type AddItemProps = {
    handleAdd: Function}

const AddItem:React.FunctionComponent<AddItemProps> = ({handleAdd}: AddItemProps) => {

    const [task, setTask] = useState('')
    const handleAddTask = () => {
        handleAdd(task);
        setTask('')
    }

  return (
    <div className='addItem'>
        <input placeholder='Add Item' value={task} onChange={(e)=>{setTask(e.target.value)}}/>
        <button onClick={()=>{handleAddTask()}}>Add Item</button>
    </div>
  )
}

export default AddItem