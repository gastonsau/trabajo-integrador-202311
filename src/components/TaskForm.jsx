import { useState } from "react";

const TaskForm = ({ addNewTask }) => {
  const [inputItem, setInputItem] = useState("");
  const onInputChange = (event) => {
    setInputItem(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addNewTask(inputItem);
    setInputItem("");
  };

  const botonMas = () => {
    addNewTask(inputItem);
    setInputItem("");    
  }

  return (
    <form className="add" onSubmit={onSubmit}>
      <input
        type="text"
        name="add"
        placeholder="Ingrese la nueva tarea"
        value={inputItem}
        onChange={onInputChange}
      />
      <div className="input-buttons">
        <i className="fas fa-plus add" onClick={botonMas}></i>
      </div>
    </form>
  );
};

export default TaskForm;
