import React from "react";
import { Link } from "react-router-dom";

const ProgramTile = ({ alternatingClass, episodes, week_num, friday_date, slot_8pm, slot_830pm, slot_9pm, slot_930pm }) => {

let timeArray = [slot_8pm, slot_830pm, slot_9pm, slot_930pm]

episodes.sort(function(a, b){
  return timeArray.indexOf(a.show_name) - timeArray.indexOf(b.show_name)
})

for(var i=0; i < 4; i++) {
 if (typeof episodes[i] === 'undefined' || !(episodes.some(episode => episode.show_name === timeArray[i]))) {
  episodes.splice(i, 0, {name: "Rerun"})
  episodes[i].formatting = "Rerun"
  }
  else {
    episodes[i].formatting = `${episodes[i].name} - S${episodes[i].season}E${episodes[i].episode_num}`
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
        <div id="program-block-1" className="episode-name">{episodes[0].formatting}</div>
        <div id="program-block-2" className="time-show">8:30 - {slot_830pm}</div>
        <div id="program-block-2" className="episode-name">{episodes[1].formatting}</div>
        <div id="program-block-1" className="time-show">9:00 - {slot_9pm}</div>
        <div id="program-block-1" className="episode-name">{episodes[2].formatting}</div>
        <div id="program-block-2" className="time-show">9:30 - {slot_930pm}</div>
        <div id="program-block-2" className="episode-name">{episodes[3].formatting}</div>
      </div>
    </div>

  );
};

export default ProgramTile
