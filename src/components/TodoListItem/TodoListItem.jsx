import React from 'react';
import {Link} from 'react-router-dom';
import './TodoListItem.css';

function TodoListItem({todo, handleDeleteTodo}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{todo.item}</h3>
      </div>
      <div className='panel-footer TodoListItem-action-panel'>
        <Link
          className='btn btn-xs btn-info'
          to={{
            pathname: '/details',
            state: {todo}
          }}
        >
          DETAILS
        </Link>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {todo}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteTodo(todo._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default TodoListItem;