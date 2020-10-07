import React, { Component } from 'react';

class Gif extends Component {

  shouldComponentUpdate(nextProps, nextState) { // we are telling react to not render if the props.id did not change
    return nextProps.id !== this.props.id;
  }

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const { id } = this.props; // destructuring
    if (!id) { // here if the first id of the gif is null we return null
      return null;
    }

    const src = `https://media4.giphy.com/media/${id}/200.gif`;
    return (
      <img src={src}
        alt=""
        className="gif"
        onClick={this.handleClick} />
    );
  }
}

export default Gif;
