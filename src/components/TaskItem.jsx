
const TaskItmes = ({nameTask, completeTask}) => {
  return (
    <>
      <li>
        <span className={completeTask  ? 'completed-task' : ""}>
        {nameTask}
        </span>
       
      </li>
    </>
  )
}

export default TaskItmes
