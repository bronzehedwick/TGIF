import React from "react";
import { Link } from "react-router-dom";

const ShowTile = ({ id, name, image_url, description }) => {


  return (
    <div>
      I'm a show tile!
      <ul>
        <li>Name: {name}</li>
        <li>Show ID: {id}</li>
        <li>Image URL: {image_url}</li>
        <li>Description: {description}</li>
      </ul>
    </div>
  );
};

export default ShowTile


