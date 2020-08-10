import React, { useState } from "react";
import { Link } from "react-router-dom";
import EpisodeListItem from "./EpisodeListItem"

const SeasonListItem= ({ number, episodes, selected, handleSeasonClick }) => {
  


  const sortedEpisodes = episodes.sort(function (a,b,) {
    return a.episode_num - b.episode_num
  })

  const seasonEpisodeList = sortedEpisodes.map((episode) => {

    return (
      <EpisodeListItem
      key={episode.id}
      episodeData={episode}
      />
    )
  })

  let activeEpisodes = ""
  let button, seasonClass
  if (selected) {
    seasonClass = 'selected-season'
    button = <button onClick={handleSeasonClick} className='primary button' aria-hidden='true'>-</button>
    activeEpisodes = seasonEpisodeList
  } else {
    seasonClass = 'unselected-season'
    button = <button onClick={handleSeasonClick} className='primary button' aria-hidden='true'>+</button>
  }

  return (
    <div className={seasonClass}>
      {button}   <h5>Season {number}</h5><br/>
      {activeEpisodes}
    </div>
  );
};

export default SeasonListItem


