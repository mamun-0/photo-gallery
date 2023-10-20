import React from "react";
import { Input } from "reactstrap";
import { withRouter } from "react-router-dom";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      searchTxt: "",
    };
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: "/search",
      state: { searchTxt: this.state.searchTxt },
    });
    this.setState({
      searchTxt: "",
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="d-flex">
        <div>
          <Input
            name="searchTxt"
            value={this.state.searchTxt}
            onChange={this.handleInputChange}
            placeholder="search"
          />
        </div>
        <button className="btn btn-primary">Search</button>
      </form>
    );
  }
}
export default withRouter(SearchBar);
