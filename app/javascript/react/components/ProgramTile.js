import React from "react";
import { Link } from "react-router-dom";

const ProgramTile = ({ episodes, week_num, friday_date, slot_8pm, slot_830pm, slot_9pm, slot_930pm }) => {

let timeArray = [slot_8pm, slot_830pm, slot_9pm, slot_930pm]

episodes.sort(function(a, b){
  return timeArray.indexOf(a.show_name) - timeArray.indexOf(b.show_name)
})

for(var i=0; i < 4; i++) {
 if (typeof episodes[i] === 'undefined' || !(episodes.some(episode => episode.show_name === timeArray[i]))) {
  episodes.splice(i, 0, {name: "Rerun"})
  }
}

  return (
    <div>
      Week number: {week_num}
      <ul>
        <li>Friday Date: {friday_date}</li>
        <li>8:00 - {slot_8pm}</li>
        <li>{episodes[0].name}</li>
        <li>8:30 - {slot_830pm}</li>
        <li>{episodes[1].name}</li>
        <li>9:00 - {slot_9pm}</li>
        <li>{episodes[2].name}</li>
        <li>9:30 - {slot_930pm}</li>
        <li>{episodes[3].name}</li>
      </ul>
    </div>

  );
};

export default ProgramTile
