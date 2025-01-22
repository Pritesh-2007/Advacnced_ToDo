import { createSlice } from '@reduxjs/toolkit';
import { generateNextDate } from '../utils/futureDate';
const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    updateTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
        localStorage.setItem('tasks', JSON.stringify(...state[index],...action.payload));

      }
    },
    addFavtask:(state,action)=>{
      console.log("enter into fav ",state)
      const index = state.findIndex((task) => task.id === action.payload.id);
      const isfav=action.payload.myfav;
      console.log("action dispatch",action.payload.id,action.payload.myfav)
      if (index !== -1) {
        console.log("in if block")
        const task = state[index];
        let arr= JSON.parse(localStorage.getItem('tasks'));
        for(let i of arr)
          {
            // console.log(i.id,i.title)
            // console.log("similarity",i.id,action.payload.id)
            if(i.id==action.payload.id)
            { 
              i.isImportant=isfav;
            }
          }
          localStorage.setItem('tasks',JSON.stringify(arr));
      }
      
    },
    deleteTask: (state, action) => {
      const updatedTasks = state.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    },
    completeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        const task = state[index];
        if (task.isRecurring) {
          task.dueDate = generateNextDate(task.dueDate, task.recurrence);
        } else {
          task.completed = true;
         let arr= JSON.parse(localStorage.getItem('tasks'));
        for(let i of arr)
        {
          console.log(i.id,i.title)
          if(i.id==state.id)
          {
            i.completed=true;
          }
        }
        }

      }
    },
  },
});

export const { addTask, updateTask, completeTask,deleteTask, addFavtask } = tasksSlice.actions;
export default tasksSlice.reducer;
