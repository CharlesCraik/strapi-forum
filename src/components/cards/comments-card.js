import React from "react";

const CommentCard = (props) => {
    return(
        <div className="comment-card column">
            <div className="comment-head">
                <span className="comment-title">{props.title}</span>
            </div>
            <div className="comment-body">
                <p>{props.content}</p>
            </div>
            <div className="comment-footer comment-meta row align-c">
                <div className="author-container">
                    <span className="author">Posted by <b>{props.author}</b></span>
                </div>
            </div>
        </div>
    )
}

export default CommentCard;