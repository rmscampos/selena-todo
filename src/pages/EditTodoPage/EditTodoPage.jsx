import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditTodoPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.todo
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateTodo(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Edit Todo</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Item (required)</label>
            <input
              className="form-control"
              name="item"
              value={this.state.formData.item}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location (required)</label>
            <input
              className="form-control"
              name="location"
              value={this.state.formData.location}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Priority</label>
            <input
              className="form-control"
              name="priority"
              value={this.state.formData.priority}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE TODO
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditTodoPage;