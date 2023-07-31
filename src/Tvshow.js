import React, { useEffect, useState } from "react";
import Show from "./Show";

function Tvshow() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=1")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);



  return (
    <div>
        {shows.map(show=><div key={show.id}><Show show={show} /></div>)}
    </div>
  );
}

export default Tvshow;
