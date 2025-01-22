import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../slices/tasksSlice';
import { BsBell } from "react-icons/bs";
import { PiRepeatLight } from "react-icons/pi";
import { FiCalendar } from "react-icons/fi";
const TaskForm = () => {
  const date = new Date();
  const formattedDate = date.toISOString().split("T")[0]; 

  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState(formattedDate);
  const [isImportant, setIsImportant] = useState(false);
  const[calender,setcalender]=useState(false);
  const dateinput=useRef(null);
  const dispatch = useDispatch();

  function showcalender()
  {
    setcalender(!calender);
    dateinput.current.focus();
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(
        addTask({
          id: Date.now().toString(),
          title,
          dueDate,
          isImportant,
          completed: false,
        })
      );
      setTitle('');
      setDueDate('');
      setIsImportant(false);
    }
  };

  return (
    <form className="task-form flex flex-col bg-taskColor" 
    onSubmit={handleSubmit}>
      <input
        className='flex h-20 outline-none px-5 placeholder:px-5 bg-transparent'
        type="text"
        placeholder="Add A Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
     {
      calender &&
      <input className="relative inline-block outline-none  px-5 placeholder:px-5 bg-transparent"
        style={{visibility:'visible'}}
        ref={dateinput}
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
     }
     
      <div className='flex justify-between px-6 items-center pb-4 cursor-pointer'>
        <div className='flex gap-3 text-xl'>
        {/* <input
          type="checkbox"
          checked={isImportant}
          onChange={(e) => setIsImportant(e.target.checked)}
        /> */}
        <BsBell/>
        <PiRepeatLight/>
        <FiCalendar onClick={()=>{showcalender();}}>
    
         </FiCalendar>
        </div>
        <div className='flex'>  
          <button type="submit" className='bg-green-200 text-green-700 font-semibold py-2 px-4 box-border rounded-lg'>Add Task</button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
