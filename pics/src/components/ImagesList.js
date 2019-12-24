import React from "react";

const ImagesList = props => {
  return (
    <div>
      {props.images.map(({ description, id, urls }) => {
        return (
          <img
            key={id}
            width="300"
            height="400"
            src={urls.regular}
            alt={description}
          ></img>
        );
      })}
    </div>
  );
};

export default ImagesList;
