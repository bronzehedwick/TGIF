import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowTile from "./ShowTile";
import SeasonListItem from "./SeasonListItem";

const ShowDetails = (props) => {
  let image_url = props.history.location.showProps.image_url
  let description = props.history.location.showProps.description
  let show_name = props.history.location.showProps.name
  let show_id = props.history.location.showProps.show_id

  const [getEpisodes, setEpisodes] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState();
 

  useEffect(() => {
    fetch(`/api/v1/episodes/${show_id}`)
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

  let seasons = []

  function countSeasons(array) {
    array.forEach(function(episode) {
        if (seasons.includes(episode.season)) {
        }
        else {
          seasons.push(episode.season)
        }
    });
  }

  countSeasons(getEpisodes)

  const seasonList = seasons.map((season) => {
    let seasonalEpisodes = getEpisodes.filter(episode => episode.season === season)
    let selected;
    if (selectedSeason === season) {
      selected = true
    }

    let handleSeasonClick = () => { toggleSeasonSelect(season) }

    return (
      <SeasonListItem 
      key={season}
      number={season}
      episodes={seasonalEpisodes}
      selected={selected}
      handleSeasonClick={handleSeasonClick}
      />
    )
  })

  const toggleSeasonSelect = (season_id) => {
    if(season_id === selectedSeason) {
      setSelectedSeason(null)
    }
    else {
      setSelectedSeason(id)
    }
  }

  
  return (
    <div>
      <p>Hello from a show detail page</p>
      <ul>
        <li>{show_name}</li>
        <li>Show Image: {image_url}</li>
        <li>Description: {description}</li>
      </ul>
      <p>Seasons:</p>
      <ul>{seasonList}</ul>
    </div>
  )

}

export default ShowDetails

