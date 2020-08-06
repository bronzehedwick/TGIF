import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProgramTile from "./ProgramTile";

const MainIndex = (props) => {
  const [getEpisodes, setEpisodes] = useState([]);
  const [getWeeks, setWeeks] = useState([]);
  
  const [getYear, setYear] = useState("None");

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
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  function handleYearChange(event) {
    setYear(event.target.value);
  }
  
  const handleSubmit = () => {
    event.preventDefault();
    // console.log("You pressed the submit button")
    fetch(`/api/v1/program_years`, {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify(getYear),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      let weekList = body;
      setWeeks(weekList.weekData);
      // debugger
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  };
  
  const selectedWeeks = getWeeks.map((week) => {
    return (
      <ProgramTile
      key={week.id}
      week_num={week.week_num}
      friday_date={week.friday_date}
      slot_8pm={week.slot_8pm}
      slot_830pm={week.slot_830pm}
      slot_9pm={week.slot_9pm}
      slot_930pm={week.slot_930pm}
      />
    );
  });

  return (
    <div>
      Welcome to the main index.
      <ul>
      <li><Link to={`/shows`}>View Shows</Link></li>
      </ul>
      <label>Choose Year
        <form id="yearSelect" onSubmit={handleSubmit}>
          <select defaultValue="none" onChange={handleYearChange}>
            <option value="none">--Select a Year--</option>
            <option value="1">Fall 1989 - Spring 1990</option>
            <option value="2">Fall 1990 - Spring 1991</option>
            <option value="3">Fall 1991 - Spring 1992</option>
            <option value="4">Fall 1992 - Spring 1993</option>
            <option value="5">Fall 1993 - Spring 1994</option>
            <option value="6">Fall 1994 - Spring 1995</option>
          </select>
          <button type="submit" className="button primary" value="Submit" form="yearSelect">Go</button>
        </form>
      </label>
      <div id="programs">
        {selectedWeeks}
      </div>
    </div>
  )
}


export default MainIndex;
