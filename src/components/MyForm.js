import React, { Component } from 'react'

export default class MyForm extends Component {

  state = {
    name: '',
    content: "",
    rememberMe: false,
    title: 'Miss.'
  }

  handleChange = (e) => {
    const isCheckbox = e.target.type === 'checkbox';
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={this.state.name} onChange={this.handleChange} />
        <textarea name="content" value={this.state.content} onChange={this.handleChange} />
        <input name="rememberMe" type="checkbox" onChange={this.handleChange}/>

        <div>
          <select name="title" value={this.state.title} onChange={this.handleChange}>
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    )
  }
}