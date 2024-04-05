import React from "react";
const actor1 = {
  name: "Jack Nicholson",
  description: `Jack Nicholson, an American actor, producer, director and
    screenwriter, is a three-time Academy Award winner and twelve-time
    nominee. Nicholson is also notable for being one of two actors - the
    other being Michael Caine - who have received an Oscar nomination in
    every decade from the 60s through.`,
  image:
    "https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY209_CR5,0,140,209_AL_.jpg",
};

const actor2 = {
  name: "Robert De Niro",
  description: `One of the greatest actors of all time, Robert De Niro was born on
    August 17, 1943 in Manhattan, New York City, to artists Virginia
    (Admiral) and Robert De Niro Sr. His paternal grandfather was of
    Italian descent, and his other ancestry is Irish, English, Dutch,
    German, and French. He was trained ...`,
  image:
    "https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY209_CR9,0,140,209_AL_.jpg",
};
const App = () => {
  return (
    <div>
      <div className="actor-container">
        <div className="image-container">
          <img src={actor1.image} alt="actor image" />
        </div>
        <div className="actor-info">
          <h4>{actor1.name}</h4>
          <P>{actor1.description}</P>
        </div>
      </div>
      <div className="actor-container">
        <div className="image-container">
          <img src={actor2.image} alt="actor image" />
        </div>
        <div className="actor-info">
          <h4>{actor2.name}</h4>
          <P>{actor2.description}</P>
        </div>
      </div>
    </div>
  );
};

export default App;
