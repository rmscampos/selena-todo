import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';


class AddTodoPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      item: '',
      location: '',
      priority: '',
      completed: false
    },
    user:userService.getUser(),

  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  // handleOnChangeTodoPriority = e => {

  // }

  render() {
    return (
      <div style={{marginTop: 20, textAlign: 'center'}}>
      <h3>Add Todo</h3>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Item Name (required)</label>
            <input
              className="form-control"
              name="item"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Item Location (required)</label>
            <input
              className="form-control"
              name="location"
              value={this.state.formData.location}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id='priorityLow'
              value='Low'
              checked={this.state.todo_priority==='Low'}
              onChange={this.handleChange}
              // onChange={this.onChangeTodoPriority}
              />
              <label className='form-check-label'>Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input  className="form-check-input"
                    type="radio"
                    name="priorityOptions"
                    id="priorityMedium"
                    value="Medium"
                    checked={this.state.todo_priority==='Medium'}
                    onChange={this.handleChange}
                    // onChange={this.onChangeTodoPriority}
                    />
            <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
                <input  className="form-check-input"
                        type="radio"
                        name="priorityOptions"
                        id="priorityHigh"
                        value="High"
                        checked={this.state.todo_priority==='High'}
                        onChange={this.handleChange}
                        // onChange={this.onChangeTodoPriority}
                        />
                <label className="form-check-label">High</label>
            </div>
            <div className="form-group">
                {this.state.user ? (
                  <input type="submit" path='/list' value="Create Todo" className="btn btn-primary" />)
                : (
                  <Link to='/signup'>
                    <button type="submit" className="btn btn-primary">Sign up to save todos</button>
                  </Link>
                )
                }
            </div>
        </form>
      </div>
    );
  }
}

export default AddTodoPage;