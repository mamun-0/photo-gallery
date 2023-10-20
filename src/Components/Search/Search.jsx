import React from "react";
import searchPhoto from "../../axios/photoSearch";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      searchTxt: null,
    };
  }
  async componentDidMount() {
    try {
      const res = await searchPhoto(this.props.location.state.searchTxt);
      this.setState({
        response: res.data.results,
        searchTxt: this.props.location.state.searchTxt,
      });
    } catch (error) {
      console.log("Fetching failed");
    }
  }

  async componentDidUpdate(previousProps, previousState) {
    if (this.props.location.state.searchTxt !== this.state.searchTxt) {
      try {
        const res = await searchPhoto(this.props.location.state.searchTxt);
        this.setState({
          response: res.data.results,
          searchTxt: this.props.location.state.searchTxt,
        });
      } catch (error) {
        console.log("Fetching failed");
      }
    }
  }
  render() {
    let photos = null;
    if (this.state.response) {
      photos = this.state.response.map((photo) => {
        return (
          <div className="m-2" key={photo.id}
          >
            <img
              style={{ height: `250px`, width: `300px`, objectFit: "cover" }}
              src={photo.urls.regular}
              alt="search-img"
            />
            <p className="fst-italic" style={{width:`250px`}}>{photo.alt_description}</p>
          </div>
        );
      });
    }
    const lodingDiv = (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
    return (
      <>
        {!this.state.response ? (
          lodingDiv
        ) : (
          <div className="container">
            <h2 className="display-3 text-center">
              {!this.state.searchTxt
                ? "Nothing searched nothing found!"
                : "Search of " + this.state.searchTxt}
            </h2>
            <div className="d-flex flex-wrap ">{photos}</div>
          </div>
        )}
      </>
    );
  }
}
export default Search;
