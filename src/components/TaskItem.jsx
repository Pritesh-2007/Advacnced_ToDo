import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFavtask, completeTask } from '../slices/tasksSlice';
import './TaskItem.css'
import { FaStar } from 'react-icons/fa';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const[myfav,setmyfav]=useState(task.isImportant);
   
  const handleComplete = () => {

    dispatch(completeTask(task.id));

};
  const addFav=()=>{
   
    const fields = {
      id: task.id,
      myfav: myfav,
    };
    dispatch(addFavtask(fields))
  }

    useEffect(()=>{

      addFav();

    },[myfav]);
  

 
  return (
    <div className={` flex w-full items-center gap-3 pr-3 border-b-2 border-b-solid  border-b-gray-200 pb-2 task-item ${task.completed ? 'completed' : ''}`}>
      <div className='flex w-full items-center gap-3'>
      <input
        className='outline-none w-5 h-5'
        type="checkbox"
        checked={task.completed}
        onChange={handleComplete}
      />
      
      <span>{task.title}</span>
      </div>

      <div><FaStar onClick={()=>{setmyfav(!myfav);}} className={`text-2xl ${myfav ? `text-yellow-500` :`text-gray-300` }`}/></div>
    </div>
  );
};

export default TaskItem;