import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../../assets/brand.jpg";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import React from "react";
class Header extends React.Component {
  userEmail() {
    try {
      if (this.props.storeSignIn) {
        return this.props.storeSignIn.email;
      } else if (this.props.storeSignOut) {
        return this.props.storeSignOut.email;
      } else {
        return null;
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  render() {
    const signInUI = (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </li>
      </>
    );
    const signOutUI = (
      <div className="d-flex justify-content-center align-items-center mx-3">
        <em className="text-white">{this.userEmail()}</em>
        <li className="nav-item">
          <Link className="nav-link" to="/signout">
            SignOut
          </Link>
        </li>
      </div>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="rotating"
              style={{ height: 50, width: 50, borderRadius: `50%` }}
              src={Logo}
              alt="brand-logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nature">
                  Nature
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/people">
                  People
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/animals">
                  Animals
                </Link>
              </li>
            </ul>
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <SearchBar />
                </li>
                {this.props.storeSignIn || this.props.storeSignUp
                  ? signOutUI
                  : signInUI}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Header);
