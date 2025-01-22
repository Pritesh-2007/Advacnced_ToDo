import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from '../components/TaskList';

const CompletedPage = () => {
  const tasks = useSelector((state) => state.tasks.filter((task) => task.completed));

  return (
    <div className='flex flex-col w-full'>
      <h1>Completed Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default CompletedPage;
