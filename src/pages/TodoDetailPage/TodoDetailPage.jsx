import React from 'react';
import TodoCard from '../../components/TodoCard/TodoCard';

function TodoDetailPage(props) {
  const todo = props.location.state.todo;
  return (
    <>
      <h1>Todo Details</h1>
      <TodoCard
        key={todo._id}
        todo={todo}
      />
    </>
  );
}

export default TodoDetailPage;