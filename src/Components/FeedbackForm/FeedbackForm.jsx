import { Component } from "react";
import { Form, Input } from "reactstrap";
class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      category: "",
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
    this.setState({
      author: "",
      feedback: "",
    });
    this.props.toggle();
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
