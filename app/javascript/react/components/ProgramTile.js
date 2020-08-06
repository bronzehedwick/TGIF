import React from "react";
import { Link } from "react-router-dom";

const ProgramTile = ({ week_num, friday_date, slot_8pm, slot_830pm, slot_9pm, slot_930pm }) => {
  return (
    <div>
      Week number: {week_num}
      <ul>
        <li>Friday Date: {friday_date}</li>
        <li>8:00 - {slot_8pm}</li>
        <li>8:30 - {slot_830pm}</li>
        <li>9:00 - {slot_9pm}</li>
        <li>9:30 - {slot_930pm}</li>
      </ul>
    </div>

  );
};

export default ProgramTile
