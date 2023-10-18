import { Component } from "react";
import { Form, Input } from "reactstrap";
import DB from "../../Data/photos";
class FeedbackForm extends Component {
  constructor(props) {
    // console.log("Feedback component ", props.id);
    super(props);
    this.state = {
      author: "",
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

  handleSubmit = (e) => {
    e.preventDefault();
    const findItem = DB.find((item) => {
      return item.id === this.props.id;
    });
    findItem.comments.push({
      id: findItem.comments.length,
      text: this.state.feedback,
      author: this.state.author,
    });
    this.setState({
      author: "",
      feedback: "",
    });
    this.props.changeState();
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
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
        </Form>
      </div>
    );
  }
}
export default FeedbackForm;
