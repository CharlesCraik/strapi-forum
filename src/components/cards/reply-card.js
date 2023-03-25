import React from "react";

const ReplyCard = (props) => {
    return(
        <div className="reply-card row align-s">
            <div className="author-image-container">
                <img />
            </div>
            <div className="reply-content-container">
                <span className="author-username">
                    {props.author}
                </span>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default ReplyCard;