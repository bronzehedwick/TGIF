import React from "react";
import { Link } from "react-router-dom";

const ShowTile = ({ description, show_id, name, image_url }) => {


  return (
    <div>
      I'm a show tile!
      <ul>
        <li>Name: {name}</li>
        <li>Show ID: {show_id}</li>
        <li>Image URL: {image_url}</li>
        <li><Link to={{
          pathname:`/shows/${show_id}`, 
          showProps: { description, name, image_url, show_id }
          }}>
            View Show Details</Link></li>
      </ul>
    </div>
  );
};

export default ShowTile



