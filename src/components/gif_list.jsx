import React from 'react';
import Gif from './gif';

const GifList = ({ gifs, selectGif }) => { // { gifs, selectGif } == (props) it is the destructuring it allows to not use props.gifs but just gif in the render function : https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0
  return ( // map over an array of props is called a list pattern, react need to have a  unique key by child (the id)
    <div className="gif-list">
      {gifs.map(({ id }) => <Gif id={id} key={id} selectGif={selectGif} />)}
    </div>
  );
  // use the destructuring for the map function, instead of having (gif) as argument i use directly the id so i don't have to write gif.id in the component each time.
};

export default GifList;
