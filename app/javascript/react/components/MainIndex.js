import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainIndex = (props) => {
  const [getEpisodes, setEpisodes] = useState([]);
  const [getWeeks, setWeeks] = useState([]);
  const [getYear, setYear] = useState();

  useEffect(() => {
    fetch("/api/v1/episodes")
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
        let episodeList = body;
        setEpisodes(episodeList.episodeData);
        // debugger
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  useEffect(() => {
    fetch("/api/v1/weeks")
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
        let weekList = body;
        setWeeks(weekList.weekData);
        // debugger
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

 

  return (
    <div>
      Welcome to the main index.
      <ul>
      <li><Link to={`/shows`}>View Shows</Link></li>
      </ul>
      <label>Select a Year
        <select defaultValue="year1989">
          <option value="year1989">Fall 1989 - Spring 1990</option>
          <option value="year1990">Fall 1990 - Spring 1991</option>
          <option value="year1991">Fall 1991 - Spring 1992</option>
          <option value="year1992">Fall 1992 - Spring 1993</option>
          <option value="year1993">Fall 1993 - Spring 1994</option>
          <option value="year1994">Fall 1994 - Spring 1995</option>
        </select>
      </label>
    </div>
  )
}


export default MainIndex;
