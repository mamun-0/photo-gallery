import { Component } from "react";
import { Form, Input } from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:3001/pictures/${this.props.id}`
      );
      data.comments.push({
        author: this.feedbackUIButton(),
        text: this.state.feedback,
        id: uuidv4(),
      });
      const res = await axios.put(`http://localhost:3001/pictures/${data.id}`, {
        ...data,
      });
      this.props.setComment(res.data.comments);
      this.setState({
        feedback: "",
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  feedbackUIButton() {
    if (this.props.storeSignIn) {
      return this.props.storeSignIn.email;
    } else if (this.props.storeSignUp) {
      return this.props.storeSignUp.email;
    } else {
      return "";
    }
  }
  showTextAreaUI = () => {
    return (
      <>
        <Input
          type="textarea"
          name="feedback"
          value={this.state.feedback}
          placeholder="Leave your feedback here"
          onChange={this.handleInputChange}
          required
        ></Input>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </>
    );
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          {this.feedbackUIButton() ? (
            this.showTextAreaUI()
          ) : (
            <Link className="btn btn-primary" to="/login">
              Please login first
            </Link>
          )}
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(FeedbackForm);
