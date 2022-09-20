import React, { useState } from 'react'
import './Task.css'

type TaskProps = {
  text: string
}

const Task:React.FunctionComponent<TaskProps> = ({text}: TaskProps) => {

  const [isChecked, setIsChecked] = useState(false)

  const handleOnclickCheckbox = () => {
    setIsChecked(!isChecked)
  }


  return (
    <div className='task' >
      <input type='checkbox' onChange={handleOnclickCheckbox} checked={isChecked}/>
      <p className={ isChecked ? 'disabled' : 'seen' }>{text}</p>
    </div>
  )
}

export default Task