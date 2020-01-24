import React from 'react';
import {Link} from 'react-router-dom';

function TodoCard({todo}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{todo.item}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Location</dt>
          <dd>{todo.location}</dd>
          <dt>Priority</dt>
          <dd>{todo.priority}</dd>
          <dt>Completed</dt>
          <dd>{todo.completed}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default TodoCard;