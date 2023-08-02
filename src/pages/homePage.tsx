import React, { useState } from "react";
import { useDispatch,} from "react-redux";
import { addTodo } from "../store/slices/todo.slice";
import { useNavigate } from "react-router-dom";
import './homepage.css'


const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const navigate = useNavigate()


  const onSubmit = (e:any) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask('')
    navigate('/taskPage')
  };

  return (
    <div className="home-container">
     
      <form onSubmit={onSubmit} className="home-form">
        <input
        className="input"
          type="text"
          placeholder="  Task . . ."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      
        <button>submit</button>
      </form>
    </div>
  );
};

export default HomePage;