import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./login.css";
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authAction';

class LoginForm extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      rememberMe: false,
      redirectToPreviousRoute: false
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
    this.props.signIn(this.state);
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    
    const { loggedIn, authError } = this.props;
    if (loggedIn) {
      return <Redirect to={from} {...this.props} />;
    }
    return (
      <React.Fragment>
        <form className="form-signin" onSubmit={this.handleFormSubmit}>
          <h1 className="h3 mb-3 mt-5 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputUserName" className="sr-only">
            User Name
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
          <div className="checkbox mb-3">
            <label>
              <input
                type="checkbox"
                value="remember-me"
                onChange={this.handleInputChange}
              />{" "}
              Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <div className="text-danger center">
            {authError? <p>{authError.message}</p> : null}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signIn: (credentials)=>{
            dispatch(signIn(credentials));
        }
    }
}

const mapStateToProps = (state)=>{
    return {
        ...state.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
