import React, { Component } from 'react';

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
}

export class ValidattionForm extends Component {

  state = initialState;

  handleChange = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value
    });
  }

  validate = () => {
    let nameError = "";
    let emailError = "";
    // let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({emailError, nameError});
      return false;
    }

    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form values after submit
      this.setState(initialState);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input 
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ color: "red", fontSize: 12 }}>{this.state.nameError}</div>
        <div>
          <input 
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ color: "red", fontSize: 12 }}>{this.state.emailError}</div>
        <div>
          <input 
            name="password"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ color: "red", fontSize: 12 }}>{this.state.passwordError}</div>

        <button type="submit">submit</button>
      </form>
    )
  }
}

export default ValidattionForm
