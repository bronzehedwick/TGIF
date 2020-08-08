import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        // debugger
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);


return (
  <p>Hello from Show Index</p>
)

}

export default ShowIndex;