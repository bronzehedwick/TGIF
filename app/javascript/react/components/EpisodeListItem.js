import React  from "react";
import { Link } from "react-router-dom";

const EpisodeListItem= ({ episodeData }) => {

  return (
    <div>
      <div className='episode-list'>
        <h5>{episodeData.episode_num}: {episodeData.name}</h5><br/>
        {episodeData.synopsis}
      </div>
    </div>
  );
};

export default EpisodeListItem