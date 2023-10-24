import React from "react";
import { connect } from "react-redux";
import { signIn } from "../../../actions";
import { Form, Input, Label } from "reactstrap";
import { withRouter } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", isLoading: false };
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
    this.props.signIn(this.state.username, this.state.password);
    this.setState({
      username: "",
      password: "",
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 3000);
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
    return (
      <>
        {this.state.isLoading ? (
          loadingDiv
        ) : (
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <p className="display-5 text-center my-3">Login</p>
            <Form style={{ width: `50%` }} onSubmit={this.handleSubmit}>
              <Label for="email">Email</Label>
              <br />
              <Input
                id="email"
                name="username"
                type="email"
                placeholder="email"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <br />
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <button className="btn btn-primary my-2">Login</button>
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
export default connect(mapStateToProps, { signIn })(withRouter(Login));
