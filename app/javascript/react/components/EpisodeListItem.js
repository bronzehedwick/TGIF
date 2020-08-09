import React  from "react";
import { Link } from "react-router-dom";

const EpisodeListItem= ({ episodeData, handleEpisodeClick, selected }) => {

  let synopsis, button, episodeClass;
  if (selected) {
    episodeClass = 'selected-episode'
    // button = <button onClick={handleEpisodeClick} className='primary button' aria-hidden='true'>-</button>
    synopsis = episodeData.synopsis
  } else {
    episodeClass = 'unselected-episode'
    // button = <button onClick={handleEpisodeClick} className='primary button' aria-hidden='true'>+</button>
  }

  return (
    <div>
      <div className={episodeClass}>
        {/* {button} */}
        <h5>{episodeData.episode_num}: {episodeData.name}</h5><br/>
        {episodeData.synopsis}
      </div>
      {/* <p>{synopsis}</p> */}
    </div>
  );
};

export default EpisodeListItem