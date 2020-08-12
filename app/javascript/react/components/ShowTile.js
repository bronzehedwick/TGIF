import React from "react";
import { Link } from "react-router-dom";

const ShowTile = ({ description, show_id, name, image_url }) => {


  return (
    <div className="cell" id="show-tile">
      <div className="card"><Link to={{
          pathname:`/shows/${show_id}`, 
          showProps: { description, name, image_url, show_id }
          }}>
        <div><h5>{name}</h5></div>
        <img src={image_url} id="show-tile-image"/>
        </Link>
      </div>
    </div>
  );
};

export default ShowTile



