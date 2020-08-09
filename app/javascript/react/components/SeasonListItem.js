import React, { useState } from "react";
import { Link } from "react-router-dom";
import EpisodeListItem from "./EpisodeListItem"

const SeasonListItem= ({ number, episodes, selected, handleSeasonClick }) => {
  const [selectedEpisode, setSelectedEpisode] = useState();

  const handleEpisodeClick = (episode_id) => {
    // debugger
    if(episode_id === selectedEpisode) {
      setSelectedEpisode(null)
    }
    else {
      setSelectedEpisode(episode_id)
    }
  }
  
  const sortedEpisodes = episodes.sort(function (a,b,) {
    return a.episode_num - b.episode_num
  })

  const seasonEpisodeList = sortedEpisodes.map((episode) => {
    let selected;
    if (selectedEpisode === episode.id) {
      selected = true
    }

    return (
      <EpisodeListItem
      key={episode.id}
      episodeData={episode}
      selected={selected}
      handleEpisodeClick={handleEpisodeClick}
      />
    )
  })


  return (
    <div>
      <ul>
      <li><h5>Season number: {number}</h5></li><br/>
      {seasonEpisodeList}
      </ul>
    </div>
  );
};

export default SeasonListItem

