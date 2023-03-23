import React, {useState} from "react";

const CommentCard = (props) => {
    const [publishDate] = useState(new Date(props.published));

    return(
        <div className="comment-card column">
            <div className="comment-head">
                <span className="comment-title">{props.title}</span>
            </div>
            <div className="comment-body">
                <p>{props.content}</p>
            </div>
            <div className="comment-footer comment-meta row align-c just-sb">
                <div className="author-container">
                    <span className="author">Posted by <b>{props.author}</b></span>
                </div>
                <div className="date-container">
                    <span className="date">{publishDate.toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    )
}

export default CommentCard;