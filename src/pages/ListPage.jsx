import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TaskList from '../components/TaskList';

const ListPage = () => {
  const { listId } = useParams();
  const tasks = useSelector((state) => state.tasks.filter((task) => task.listId === listId));

  return (
    <div>
      <h1>Tasks in List</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default ListPage;