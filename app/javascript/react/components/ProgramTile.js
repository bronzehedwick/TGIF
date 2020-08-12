import React from "react";
import { Link } from "react-router-dom";
import MicroModal from 'react-micro-modal';

const ProgramTile = ({ alternatingClass, episodes, week_num, friday_date, slot_8pm, slot_830pm, slot_9pm, slot_930pm }) => {

let timeArray = [slot_8pm, slot_830pm, slot_9pm, slot_930pm]

episodes.sort(function(a, b){
  return timeArray.indexOf(a.show_name) - timeArray.indexOf(b.show_name)
})

for(var i=0; i < 4; i++) {
 if (typeof episodes[i] === 'undefined' || !(episodes.some(episode => episode.show_name === timeArray[i]))) {
  episodes.splice(i, 0, {name: "Rerun"})
  episodes[i].formatting = "Rerun"
  episodes[i].synopsis = "A rerun aired on this date."
  episodes[i].modal_show_name = timeArray[i]
  episodes[i].modal_season_ep = "Rerun"
  }
  else {
    episodes[i].formatting = `${episodes[i].name} - S${episodes[i].season}E${episodes[i].episode_num}`
    episodes[i].modal_show_name = `${episodes[i].show_name} - ${episodes[i].name}`
    episodes[i].modal_season_ep = `Season ${episodes[i].season} - Episode ${episodes[i].episode_num}`
  }
}

const formatDate = function(input) {
  const pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
  if (!input || !input.match(pattern)) {
    return null;
  }
  return input.replace(pattern, '$2/$3/$1');
};

let formattedDate = formatDate(friday_date)

  return (
    <div className="cell" id="week-tile">
      <div className="card" id={alternatingClass}>
      <h5>Friday {formattedDate}</h5>
        <div id="program-block-1" className="time-show">8:00 - {slot_8pm}</div>
        <div id="program-block-1" className="episode-name">
          <MicroModal 
          containerStyles={{ background: '#24c4db' }}
          trigger={handleOpen => <div onClick={handleOpen}>{episodes[0].formatting}</div>}
          children={handleClose => <div onClick={handleClose}>
            <h3>{episodes[0].modal_show_name}</h3>
            {episodes[0].modal_season_ep}<br/>
            {episodes[0].synopsis}<br/>
            <h2>Close</h2></div>}
        /></div>
        <div id="program-block-2" className="time-show">8:30 - {slot_830pm}</div>
        <div id="program-block-2" className="episode-name">
          <MicroModal 
          containerStyles={{ background: '#24c4db' }}
          trigger={handleOpen => <div onClick={handleOpen}>{episodes[1].formatting}</div>}
          children={handleClose => <div onClick={handleClose}>
            <h3>{episodes[1].modal_show_name}</h3>
            {episodes[1].modal_season_ep}<br/>
            {episodes[1].synopsis}<br/>
            <h2>Close</h2></div>}
        /></div>
        <div id="program-block-1" className="time-show">9:00 - {slot_9pm}</div>
        <div id="program-block-1" className="episode-name">
          <MicroModal 
          containerStyles={{ background: '#24c4db' }}
          trigger={handleOpen => <div onClick={handleOpen}>{episodes[2].formatting}</div>}
          children={handleClose => <div onClick={handleClose}>
            <h3>{episodes[2].modal_show_name}</h3>
            {episodes[2].modal_season_ep}<br/>
            {episodes[2].synopsis}<br/>
            <h2>Close</h2></div>}
        /></div>
        <div id="program-block-2" className="time-show">9:30 - {slot_930pm}</div>
        <div id="program-block-2" className="episode-name">
          <MicroModal 
          containerStyles={{ background: '#24c4db' }}
          trigger={handleOpen => <div onClick={handleOpen}>{episodes[3].formatting}</div>}
          children={handleClose => <div onClick={handleClose}>
          <h3>{episodes[3].modal_show_name}</h3>
          {episodes[3].modal_season_ep}<br/>
          {episodes[3].synopsis}<br/>
          <h2>Close</h2></div>}
        /></div>
      </div>
    </div>

  );
};

export default ProgramTile
