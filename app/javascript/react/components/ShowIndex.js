import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowTile from "./ShowTile"

const ShowIndex = (props) => {

  const [getShows, setShows] = useState([]);

  useEffect(() => {
    fetch("/api/v1/shows")
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        let showList = body;
        setShows(showList.showData);
        debugger
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const showList = getShows.map((show) => {
    // debugger
    return (
      <ShowTile
      key={show.id}
      id={show.id}
      name={show.name}
      image_url={show.image_url}
      description={show.description}
      />
    );
  });

  return (
    <div>
      <p>Hello from Show Index</p>
      <div className="main-border-pink">
        <div className="grid-container">
          <div className="grid-x grid-margin-x small-up-2 medium-up-3">
            {showList}
          </div>
        </div>
      </div>
    </div>
  )

}

export default ShowIndex;