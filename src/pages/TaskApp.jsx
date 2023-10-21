import React, { useState } from 'react';
import style from '../pages/Task.module.css';
import trashIcon from '../assets/trash.svg';

function UpdatedTaskComponent() {
  const [currentView, setCurrentView] = useState("ativas");
  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const toggleTaskCompletion = (taskToToggle) => {
    const updatedTaskList = taskList.map((task) => {
      if (task === taskToToggle) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  const filteredTasks = taskList.filter((task) => {
    if (currentView === "ativas") {
      return !task.isCompleted;
    } else if (currentView === "concluidas") {
      return task.isCompleted;
    }
    return true;
  });

  const addNewTask = () => {
    if (newTask.trim() !== "") {
      setTaskList([{ text: newTask, isCompleted: false }, ...taskList]);
      setNewTask('');
    }
  }

  const deleteTask = (taskToDelete) => {
    const updatedTaskList = taskList.filter((task) => task !== taskToDelete);
    setTaskList(updatedTaskList);
  };

  return (
    <>
      <div className={style.NewAppMain}>
        <h1>Lista de Tarefas</h1>
        <input
          type="text"
          value={newTask}
          name="newTask"
          onChange={(e) => setNewTask(e.target.value)}
        /><br />
        <div className={style.AddNewTask}><button onClick={addNewTask}>Adicionar Tarefa</button></div>
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.text} className={style.NewListItem}>
              {task.text}{' '}
              <div className={style.NewItemActions}>
                <input
                  type="checkbox"
                  name="isCompleted"
                  className={style.NewButtonCheckBox}
                  checked={task.isCompleted}
                  onChange={() => toggleTaskCompletion(task)}
                />
                <button
                  className={style.NewButtonTrash}
                  onClick={() => deleteTask(task)}
                >
                  <img src={trashIcon} className={style.NewTrashIcon} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={() => setCurrentView("ativas")}>Tarefas Ativas</button>
          <button onClick={() => setCurrentView("concluidas")}>Tarefas Concluidas</button>
        </div>
      </div>
    </>
  );
}

export default UpdatedTaskComponent;
