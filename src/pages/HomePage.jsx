import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const HomePage = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className='flex flex-col w-full'>
      <h1>All Tasks</h1>
      <TaskForm/>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default HomePage;
