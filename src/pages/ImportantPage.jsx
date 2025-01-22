import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from '../components/TaskList';

const ImportantPage = () => {
  const tasks = useSelector((state) => state.tasks.filter((task) => task.isImportant));

  return (
    <div>
      <h1>Important Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default ImportantPage;
