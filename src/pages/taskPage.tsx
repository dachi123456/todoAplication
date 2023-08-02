import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index"; 
import deleteIcon from '../imgs/icons8-delete-48.png'
import editIcon from '../imgs/icons8-edit-30.png'
import { deleteTodo } from "../store/slices/todo.slice";
import { useNavigate } from "react-router-dom";
import './taskpage.css'

const TaskPage: React.FC = () => {
  const taskList = useSelector((state: RootState) => state.todo.taskList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = (id: string) => {
    dispatch(deleteTodo(id));
  };
  
  const edit = (id: string) => {
    navigate(`/editPage/${id}`);
  };

  return (
    <div className="taskPage-container">
      
      {taskList.map(el => (
        <div key={el.id} className="list">
          <h4>{el.content}</h4>
          <span>
            <img src={deleteIcon} onClick={() => onClick(el.id)} alt="delete-icon" />
            <img src={editIcon} onClick={() => edit(el.id)} alt="edit-btn" />
          </span>
          
        </div>
        
      ))}
    </div>
  );
};

export default TaskPage;