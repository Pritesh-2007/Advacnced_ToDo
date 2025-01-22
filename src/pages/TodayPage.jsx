import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from '../components/TaskList';

const TodayPage = () => {
  const today = new Date().toISOString().split('T')[0];
  const tasks = useSelector((state) => state.tasks.filter((task) => task.dueDate === today));

  return (
    <div className='flex flex-col w-full'>
      <h1>Tasks for Today</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};
export default TodayPage;