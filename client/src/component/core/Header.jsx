/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';
import logo from "../../logo.svg";
class Header extends Component {
    state = {  }
    getLogInLinks(){
      return (
        <React.Fragment>
        <Link className="btn btn-primary my-2 ml-1 my-sm-0" to="/login">
                    Login
                  </Link>
              <Link className="btn btn-success my-2 ml-1 my-sm-0" to="/signup">
                    Sign Up
                  </Link>
                  </React.Fragment>
      )
    }
    getLogOutLinks(){
      return (
        <React.Fragment>
        <button className="btn btn-primary my-2 ml-1 my-sm-0" onClick={()=>this.handleLogout()}>
                    Logout
                  </button>
                  </React.Fragment>
      )
    }
    handleLogout(){
      const {loginDetails} = this.props;
      this.props.signOut(loginDetails.accessToken);

    }
    render() { 
      const {loggedIn} = this.props;
        return (  
            <React.Fragment>
                <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand">
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="ASJ"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/home" className="nav-link ml-4 mr-4">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item dropdown ml-4 mr-4">
                  <span
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Collections
                  </span>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link className="dropdown-item" to={`/collection/jwellary`}>
                      Jwellary
                    </Link>
                    <Link className="dropdown-item" to={`/collection/stones`}>
                      Precious Stones
                    </Link>
                    <Link className="dropdown-item" to={`/collection/coins`}>
                      Coins
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={`/collection/giftarticles`}
                    >
                      Gift Articals
                    </Link>
                  </div>
                </li>
                <li className="nav-item ml-4 mr-4">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item ml-4 mr-4">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>

              <button
                className="btn btn-outline-secondary my-2 my-sm-0 mr-2"
                type="button"
              >
                1KG Silver - 41565 ₹
              </button>
              <button
                className="btn btn-outline-warning my-2 my-sm-0"
                type="button"
              >
                24K Gold - 32000 ₹
              </button>
              { loggedIn? this.getLogOutLinks(): this.getLogInLinks()}
              
            </div>
          </nav>
        </header>
            </React.Fragment>
        );
    }
}
 
const mapStateToProps = (state)=>{
  return {
    ...state.auth
}
}

const mapDispatchToProps = (dispatch)=>{
  return {
      signOut: (credentials)=>{
          dispatch(signOut(credentials));
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);