
const TaskItmes = ({idTask, nameTask, completeTask, delNewTask, UpdStateTask}) => {
  
  const onClickIconDel = (event) => {
    event.preventDefault()
    delNewTask(event.target.id)
  }

  const onClickIconComp = (event) => {
    event.preventDefault()
    UpdStateTask(event.target.id)
  }
 

  return (
    <>
      <li>
        <span className="nameTask">{nameTask}</span>
        <span className="buttonTask">
          <i onClick = {onClickIconComp}  id = {idTask} className={completeTask  ? 'fa fa-check completed' : 'fa fa-ban uncompleted'}></i>
          <i onClick = {onClickIconDel}  id = {idTask} className='far fa-trash-alt delete'></i>
        </span>
      </li>
    </>
  )
}

export default TaskItmes
