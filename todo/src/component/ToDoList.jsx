// components/ToDoList.jsx
import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onDelete, onToggle, onEdit }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ToDoList;