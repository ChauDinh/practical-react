import React, { Component } from 'react'

export default class MyForm extends Component {

  state = {
    name: 'e',
    rememberMe: false,
    title: 'Miss.'
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleCheck = (e) => {
    console.log("called!");
    this.setState({
      rememberMe: e.target.checked
    })
  }

  handleSelect = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state);
  }

  render() {
    console.log(this.state.name);
    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange} />
        <textarea value={this.state.name} onChange={this.handleChange} />
        <input type="checkbox" onChange={this.handleCheck}/>

        <div>
          <select value={this.state.title} onChange={this.handleSelect}>
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    )
  }
}