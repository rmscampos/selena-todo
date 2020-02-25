import React, {Component} from 'react';
import './App.css';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import * as todoAPI from '../../services/todos-api';
import TodoListPage from '../../pages/TodoListPage/TodoListPage';
import AddTodoPage from '../../pages/AddTodoPage/AddTodoPage';
import TodoDetailPage from '../../pages/TodoDetailPage/TodoDetailPage';
import EditTodoPage from '../../pages/EditTodoPage/EditTodoPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      todos: []
    };
  }

// -----------*** CHANGE THESE TO FETCH REQUESTS *** ----------------

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

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

 //   /*--- Lifecycle Methods ---*/

  // async componentDidMount() {
  //   const todos = await todoAPI.getAll();
  //   this.setState({todos});
  // }

  render() {
    return (
      <div>
        <header className="App-header">
    
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
   
          </header>
        <Switch>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/list' render={() => 
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
           <Route exact path='/' render={() => 
            <HomePage/>
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
        </Switch>
      </div>
    );
  }
}


export default App;




{/* <nav>
<NavLink exact to='/'>TO DO LIST</NavLink>
&nbsp;&nbsp;&nbsp;
<NavLink exact to='/add'>ADD TO DO</NavLink>
</nav> 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link to="/homepage">
<img src="https://i.imgur.com/P3oILwq.jpg" width="30" height="30" alt="Selena" />
</Link>

<div className="collapse nav-collapse">
<ul className="navbar-nav mr-auto">
  <li className="navbar-item">
    <Link to="/" className="nav-link">To Do List</Link>
  </li>
  <li className="navbar-item">
    <Link to="/add" className="nav-link">Create Todo</Link>
  </li>
</ul>
</div>
</nav> */}