import React, { Component } from "react";

  function PostComment(comments) {
    return comments.map(comment => (
      <div className="Avatar-align">
        <img className="Avatar" src={comment.img} alt="avatar"/>
        <p className="Comments" key={comment.id}>
        <strong>{comment.name}</strong> {comment.content}
        </p>
      </div>));
  }

  function PostItem({img, name, date , post, comments}) {
    return (
      <div className="PostItem">
        <div className="Avatar-align Align">
          <img className="Avatar" src={img} alt="avatar"/>
          <p><strong>{name}</strong> <br/> {date}</p>
        </div>
        <br/>
        <p>{post}</p>
        <br/>
        {PostComment(comments)}
        <br/>
      </div>
    );
    

  }

export default PostItem;