import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from '../components/TaskList';

const ScheduledPage = () => {
  const tasks = useSelector((state) => state.tasks.filter((task) => task.dueDate));

  return (
    <div className='flex flex-col w-full'>
      <h1>Scheduled Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default ScheduledPage;