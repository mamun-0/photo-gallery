import { Component } from "react";
import { Form, Input } from "reactstrap";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
class FeedbackForm extends Component {
  constructor(props) {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `http://localhost:3001/pictures/${this.props.id}`
    );
    data.comments.push({
      author: this.state.author,
      text: this.state.feedback,
      id: uuidv4(),
    });
    const res = await axios.put(`http://localhost:3001/pictures/${data.id}`, {
      ...data,
    });
    this.props.setComment(res.data.comments);
    this.setState({
      author: "",
      feedback: "",
    });
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
