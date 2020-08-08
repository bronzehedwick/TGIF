import React from "react";
import { Link } from "react-router-dom";

const ProgramTile = ({ episodes, week_num, friday_date, slot_8pm, slot_830pm, slot_9pm, slot_930pm }) => {

// debugger
let timeArray = [slot_8pm, slot_830pm, slot_9pm, slot_930pm]

for(var i=0; i < 4; i++) {
 if (typeof episodes[i] === 'undefined' || !(episodes.some(episode => episode.show_name === timeArray[i]))) {
  episodes.splice(i, 0, {name: "Rerun"})
  // console.log(`This should be a rerun week for week ${week_num} show ${timeArray[i]}`)
  }
 else 
  {
  //  console.log(`This should NOT be a rerun week for week ${week_num} show ${timeArray[i]}`)
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
