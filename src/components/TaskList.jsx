import { useState } from 'react';
import { useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';




const TaskList = () => {
    //   let listTask = [
    //   {idTask : 0, nameTask : 'Tarea 1', completeTask : true},
    //   {idTask : 1, nameTask : 'Tarea 2', completeTask : false},
    // ]

  let listTask = []

  // Trae el valor del array almacenado en el LocalStorage
  const listTaskStorage =   localStorage.getItem('array')
  
  // Convierte el valor del array obtenido en el LocalStorage
  const listTaskStorageParsed = JSON.parse(listTaskStorage)

  // Verifica si el valor del array obtenido en el LocalStorage no está vacio y lo asigna al valor inicial del array que contiene la lista de tareas
  if ((listTaskStorageParsed !== null)){
    listTask = listTaskStorageParsed
  }
  

  // Setea el estado inicial con el array
  const [arrayList, setarrayList] = useState(listTask)


  // Agrega nuevas tareas
  const onAddTask = (nomTask) => {
  
    // Le quita los espacios en blanco al input ingresado con la nueva tarea
    let nomTaskTrim = nomTask.trim()

    // Chequea que la tarea ingresada en el input no sea blanco. Si es blanco sale y no hace nada
    if(nomTaskTrim<1) return
    
    // Busca el mayor Id para cargarlo en el nuevo registro
    const maxId = Math.max.apply(Math, arrayList.map(o => o.idTask))
    let maxCode = {...arrayList.find((value) => Number(value.idTask) === maxId)}
  
    if(!Number.isInteger(maxCode.idTask)) 
      {
      maxCode.idTask = 0
      }

    const inputTask = {
      idTask : maxCode.idTask + 1,
      nameTask : nomTaskTrim, 
      completeTask : false 
    }
    
    //  Agrega la nueva tarea al useState
    setarrayList([...arrayList, inputTask])
  }

  
  // Borra una lista del array
  const onDelTask = (idTask) => {
     setarrayList([
      ...arrayList.slice(0, idTask),
      ...arrayList.slice(parseInt(idTask)  + 1, arrayList.length)
      ])
    }

  // Actualiza el estado de una tarea
  const UpdStateTask = (idTask) => {
    arrayList[parseInt(idTask)]['completeTask'] = !arrayList[parseInt(idTask)]['completeTask']
    
    setarrayList([...arrayList])
    
  }

  // Muestra el cambio en la lista y guarda el array en el localstorage para usarlo luego
  useEffect(() => {
    // Muestra mensaje diciendo que cambió la lista
    console.log('Cambio la lista')

    // convierte el array a un string JSON
    const jsonArray = JSON.stringify(arrayList);

    // almacena en el localStorage bajo el nombre de llave "array" y jsonArray como el valor
    localStorage.setItem('array', jsonArray);

    // Trae el string JSON del localStorage
   // const storedArray = localStorage.getItem('array');

    // convierte el string JSON en un objeto
   // const parsedArray = JSON.parse(storedArray);

  }, [arrayList]);

  return (
    <>
      <div className="header-task">
            <div className="cover-inner">
                <h3>Tareas</h3>
            </div>
        </div>
        <div className="content">
      <TaskForm addNewTask = {onAddTask}></TaskForm>
      <ul className='todos'>
        {
        arrayList.map((itemList, indexArr) => 
          <TaskItem 
          key = {itemList.idTask} 
          idTask = {indexArr} 
          nameTask = {itemList.nameTask} 
          completeTask = {itemList.completeTask} 
          delNewTask = {onDelTask} 
          UpdStateTask = {UpdStateTask}
          />
          )
        }
      </ul>
      </div>
    </>
  )
}

export default TaskList;
