import React, { useState, useEffect } from "react";

function Show({ show }) {
  const [imgClicked, setImgClicked] = useState(false);

  const [titleClicked, setTitleClicked] = useState(false);

  const showId = show.id;

  const [akaData, setAkaData] = useState([]);
  function imgClickHandler(show) {
    if (imgClicked) {
      return (
        <div>
          <p>{show.type}</p>
          <p>{show.status}</p>
        </div>
      );
    }
  }
useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${showId}/akas`)
          .then((response) => response.json())
          .then((data) => setAkaData(data));
      }, []);
  function titleClickHandler(show) {
    if (titleClicked) {
      return (
        <div>
            {akaData.length}
          {akaData.map((aka) => (
            <div key={aka.name}>
              {aka.name} : {aka.country.name}
            </div>
          ))}
        </div>
      );
    }
  }

  return (
    <div>
      <div>
   
          <h3><span onClick={() =>
            titleClicked ? setTitleClicked(false) : setTitleClicked(true)
          }>

          {show.name}
          </span>
          </h3>
  

        {titleClickHandler(show)}
      </div>
      {show.image && (
        <button
          onClick={() =>
            imgClicked ? setImgClicked(false) : setImgClicked(true)
          }
        >
          <img src={show.image.medium} />
        </button>
      )}
      {imgClickHandler(show)}
    </div>
  );
}

export default Show;
