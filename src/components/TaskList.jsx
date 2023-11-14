import { useState } from 'react';
import { useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  //    let listTask = [
  //    {idTask : 0, nameTask : 'Tarea 1', completeTask : true},
  //  ]
   let listTask = []

  // Trae el valor del array almacenado en el LocalStorage
  const listTaskStorage =   localStorage.getItem('array')
  
  // Convierte el valor del array obtenido en el LocalStorage
  const listTaskStorageParsed = JSON.parse(listTaskStorage)

  // Verifica si el valor del array obtenido en el LocalStorage no está vacio y lo asigna al valor inicial del array que contiene la lista de tareas
  if(listTaskStorageParsed.length >1)
  listTask = listTaskStorageParsed

  // Setea el estado inicial con el array
  const [arrayList, setarrayList] = useState(listTask)

  const onAddTask = (nomTask) => {
  
  // Le quita los espacios en blanco al input ingresado con la nueva tarea
  let nomTaskTrim = nomTask.trim()

  // Chequea que la tarea ingresada en el input no sea blanco. Si es blanco sale y no hace nada
  if(nomTaskTrim<1) return
  
  const inputTask = {
    idTask : arrayList.length,
    nameTask : nomTaskTrim, 
    completeTask : true
  }
  //  Agrega la nueva tarea al useState
  setarrayList([...arrayList, inputTask])

  }

  useEffect(() => {
    // Muestra mensaje diciendo que cambió la lista
    console.log('Cambio la lista');
      // convierte el array a un string JSON
      const jsonArray = JSON.stringify(arrayList);

      // almacena en el localStorage bajo el nombre de llave "array" y jsonArray como el valor
      localStorage.setItem('array', jsonArray);

      // Trae el string JSON del localStorage
      const str = localStorage.getItem('array');

      // convierte el string JSON en un objeto
      const parsedArray = JSON.parse(str);

      console.log('arraystored'+parsedArray);

  }, [arrayList]);

  return (
    <>
      <h1>Listado de tareas</h1>
      <TaskForm addNewTask = {onAddTask}></TaskForm>
      <ol>
      {arrayList.map(itemList => 
      <TaskItem key = {itemList.idTask} nameTask = {itemList.nameTask} completeTask = {itemList.completeTask} />
      )
      }
      </ol>

    </>
  )
}

export default TaskList;
