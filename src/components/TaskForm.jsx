import { useState } from 'react';

const TaskForm = ({addNewTask}) => {
  
    const  [inputItem, setInputItem] = useState('')
    const onInputChange = (event) => {
        setInputItem(event.target.value)
    }
    const onSubmit = (event) => {

        event.preventDefault()
        addNewTask(inputItem)
        setInputItem('')
    }


  return (
    <form onSubmit={onSubmit}>
        <input 
        type = 'text' 
        placeholder = 'Ingrese la nueva tarea' 
        value = {inputItem} 
        onChange = {onInputChange} 
        />
    </form>
  )
}

export default TaskForm
