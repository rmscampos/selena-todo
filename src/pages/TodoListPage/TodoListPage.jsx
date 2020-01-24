import React from 'react';
import './TodoListPage.css';
import TodoListItem from '../../components/TodoListItem/TodoListItem';

function TodoListPage(props) {
  return (
    <>
      <h1>To Do List</h1>
      <div className='TodoListPage-grid'>
        {props.todos.map(todo => 
          <TodoListItem
            todo={todo}
            handleDeleteTodo={props.handleDeleteTodo}
            key={todo._id}
          />
        )}
      </div>
    </>
  );
}

export default TodoListPage;