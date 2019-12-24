import React from "react";
import Faker from "faker";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a className="avatar">
        <img alt="avatar" src={Faker.image.avatar()}></img>
      </a>
      <div className="content">
        <a className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};
export default CommentDetail;
