import React,{ Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }


  handleUpdate = (event) => {
    this.setState({
      query: event.target.value
    });
    this.props.searchFunction(event.target.value);
  };

  render() {
    return (
      <input
        value={this.state.query} //controlled component
        type="text"
        className="form-control form-search"
        placeholder="Search a gif"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
