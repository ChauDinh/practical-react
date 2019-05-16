import React, { Component } from 'react';
import shortid from "shortid";

export default class TodoForm extends Component {

  state = {
    text: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // submit the form
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name="text"
          value={this.state.text} 
          onChange={this.handleChange} 
          placeholder="What need to be done?" 
        />
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}