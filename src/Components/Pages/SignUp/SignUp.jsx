import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../../actions";
import { Form, Input, Label } from "reactstrap";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      isLoading: false,
      alert: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      this.props.signUp(this.state.username, this.state.password);
      this.setState({
        username: "",
        password: "",
        confirmPassword: "",
        isLoading: true,
      });
      setTimeout(() => {
        this.setState({
          isLoading: false,
        });
      }, 3000);
    } else {
      this.setState({ alert: true });
    }
  }
  componentDidUpdate() {
    if (this.props.storeSignIn || this.props.storeSignUp) {
      if (this.state.isLoading) {
        this.setState({
          isLoading: false,
        });
      }
      this.props.history.push("/");
    }
  }
  render() {
    const loadingDiv = (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
    const alertUI = (
      <div
        className="alert alert-danger d-flex align-items-center mt-2"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16"
          role="img"
          aria-label="Warning:"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>Password mismatch or Username already exist</div>
      </div>
    );
    return (
      <>
        {this.state.isLoading ? (
          loadingDiv
        ) : (
          <div className="container d-flex flex-column justify-content-center align-items-center">
            {this.state.alert ? alertUI : null}
            <p className="display-5 text-center my-2">SignUp</p>
            <Form style={{ width: `50%` }} onSubmit={this.handleSubmit}>
              <Label for="email">Email</Label>
              <br />
              <Input
                id="email"
                name="username"
                type="email"
                required
                value={this.state.username}
                placeholder="email"
                onChange={this.handleChange}
              />
              <br />
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={this.state.password}
                required
                placeholder="password"
                onChange={this.handleChange}
              />
              <br />
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={this.state.confirmPassword}
                required
                placeholder="confirm password"
                onChange={this.handleChange}
              />
              <button className="btn btn-primary my-2">SignUp</button>
            </Form>
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { signUp })(SignUp);
