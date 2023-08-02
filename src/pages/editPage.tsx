import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { RootState } from "../store/index";
import { editTodo } from "../store/slices/todo.slice";
import './editPage.css'

const EditPage: React.FC = () => {
  const { Id } = useParams<{ Id: string }>();
  const taskList = useSelector((state: RootState) => state.todo.taskList);
  const taskToEdit = taskList.find(task => task.id === Id);
  const [editedContent, setEditedContent] = useState(taskToEdit ? taskToEdit.content : "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSave = () => {
    if (taskToEdit) {
      dispatch(editTodo({ id: taskToEdit.id, content: editedContent }));
      navigate(`/taskPage`); 
    }
  };

  return (
    <div className="editPage-container">
      
      <div className="edit-content">
      <input
        value={editedContent}
        onChange={e => setEditedContent(e.target.value)}
        className="edit-input"
      />
      
      <button onClick={onSave}>Save</button>
      </div>
    </div>
  );
};

export default EditPage;