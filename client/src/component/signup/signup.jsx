import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./signup.css";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authAction";
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      confirmPassword: "",
      redirectToLoginRoute: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("Password are not matching..");
    } else {

      this.props.signUp(this.state);
    }
  }
  render() {
    if (this.props.signUpdetalis) {
      return <Redirect to="/login" />;
    }
    return (
      <React.Fragment>
        <form className="form-signin" onSubmit={this.handleFormSubmit}>
          <h1 className="h3 mb-3 mt-5 font-weight-normal">Please sign up</h1>

          <label htmlFor="inputUserName" className="sr-only">
            Prefered User Name
          </label>
          <input
            type="text"
            id="inputUserName"
            className="form-control"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            required
            autoFocus
          />
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            name="email"
            placeholder="Email address"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="inputConfirmPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            type="password"
            id="inputConfirmPassword"
            className="form-control"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleInputChange}
            required
          />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign up
          </button>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: userDetails => {
      dispatch(signUp(userDetails));
    }
  };
};

const mapStateToProps = state => {
  return {
    signUpdetalis: state.auth.signUpDetals
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
