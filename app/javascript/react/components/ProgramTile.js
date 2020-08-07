import React from "react";
import { Link } from "react-router-dom";

const ProgramTile = ({ episodes, week_num, friday_date, slot_8pm, slot_830pm, slot_9pm, slot_930pm }) => {
  debugger

  // if array[0].show_name != slot_8pm, push "Rerun" to index 0

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
