import React from "react";
import "./ImagesList.css";
import ImageCard from "./ImageCard";

const ImagesList = props => {
  return (
    <div className="image-list">
      {props.images.map(image => {
        return <ImageCard key={image.id} image={image}></ImageCard>;
      })}
    </div>
  );
};

export default ImagesList;
