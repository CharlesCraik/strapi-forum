import React from "react";

const ForumCard = (props) => {
    return(
        <div className="forum-card row">
            <div className="forum-image-container">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="forum-details column just-c">
                <div className="forum-details-head">
                    <span className="forum-title">{props.title}</span>
                </div>
                <div className="forum-details-body">
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="forum-actions-container align-c row just-e">
                <a href="#" className="BTN primary">Discover More</a>
            </div>
        </div>
    );
}

export default ForumCard;