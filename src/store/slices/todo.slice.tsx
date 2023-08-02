import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Todo {
  id: string;
  content: string;
}

interface TodoState {
  taskList: Todo[];
  darkMode: boolean
}

const initialState: TodoState = {
  taskList: [],
  darkMode: false
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: new Date().toISOString(),
        content: action.payload,
      };
      state.taskList.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<string | number>) => {
      state.taskList = state.taskList.filter(task => task.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const { id, content } = action.payload;
      const taskToEdit = state.taskList.find(task => task.id === id);
      if (taskToEdit) {
        taskToEdit.content = content;
      }
    },
    toggleTheme: (state) => {
        return{
          ...state,
          darkMode: !state.darkMode
        }
    }
  },
});

export const { addTodo, deleteTodo,editTodo,toggleTheme } = todoSlice.actions;

export default todoSlice.reducer;