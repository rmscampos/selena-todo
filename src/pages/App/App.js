import React, {Component} from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
// The following imports all named exports attached to todoAPI
// import * as todoAPI from '../../services/todos-api';
import TodoListPage from '../../pages/TodoListPage/TodoListPage';
import AddTodoPage from '../../pages/AddTodoPage/AddTodoPage';
import TodoDetailPage from '../../pages/TodoDetailPage/TodoDetailPage';
import EditTodoPage from '../../pages/EditTodoPage/EditTodoPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';


class App extends Component {
  state = {
    todos: []
  };

  handleAddTodo = async newTodoData => {
    const newTodo = await todoAPI.create(newTodoData);
    this.setState(state => ({
      todos: [...state.todos, newTodo]
    }),
    // Using cb to wait for state to update before rerouting
    () => this.props.history.push('/'));
  }

  handleUpdateTodo = async updatedTodoData => {
    const updatedTodo = await todoAPI.update(updatedTodoData);
    const newTodosArray = this.state.todos.map(t => 
      t._id === updatedTodo._id ? updatedTodo : t
    );
    this.setState(
      {todos: newTodosArray},
      () => this.props.history.push('/')
    );
  }

  handleDeleteTodo= async id => {
    await todoAPI.deleteOne(id);
    this.setState(state => ({
      todos: state.todos.filter(t => t._id !== id)
    }), () => this.props.history.push('/'));
  }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const todos = await todoAPI.getAll();
    this.setState({todos});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Selena To Do
          <nav>
            <NavLink exact to='/'>TODOS LIST</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/add'>ADD TO DO</NavLink>
          </nav>
        </header>
        <main>
          <Route exact path='/' render={() => 
            <TodoListPage
              todos={this.state.todos}
              handleDeleteTodo={this.handleDeleteTodo}
            />
          } />
          <Route exact path='/add' render={() => 
            <AddTodoPage
              handleAddTodo={this.handleAddTodo}
            />
          } />
          <Route exact path='/details' render={({location}) => 
            <TodoDetailPage location={location}/>
          } />
          <Route exact path='/edit' render={({location}) => 
            <EditTodoPage
              handleUpdateTodo={this.handleUpdateTodo}
              location={location}
            />
          } />
        </main>
      </div>
    );
  }
}

export default App;
