// TaskManager.js
import React, { useState } from 'react';
import Todo from './Todo';
import Progress from './Progress';
import Done from './Done';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Hero Section', status: 'todo' },
    { id: 2, title: 'Implement design screens', status: 'progress' },
    // Add more tasks as needed
  ]);

  const moveTask = (taskId, targetStatus) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status: targetStatus };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div>
      <Todo tasks={tasks.filter(task => task.status === 'todo')} moveTask={moveTask} />
      <Progress tasks={tasks.filter(task => task.status === 'progress')} moveTask={moveTask} />
      <Done tasks={tasks.filter(task => task.status === 'd')} moveTask={moveTask} />

    </div>
  );
};

export default TaskManager;
