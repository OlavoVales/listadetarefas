import React from 'react';
import trashIcon from '../assets/trash.svg';
import style from '../pages/Task.module.css';


function UpdatedTaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={style.NewListItem}>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => toggleTaskCompletion(index)}
          />
          <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(index)}>
          <img src={trashIcon}/>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UpdatedTaskList;
