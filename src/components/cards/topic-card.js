import React from "react";

const TopicCard = (props) => {
    return(
        <div className="topic-card row">
            <div className="topic-image-container">
                
            </div>
            <div className="topic-details column just-c">
                <div className="topic-details-head">
                    <span className="topic-title">{props.title}</span>
                </div>
                <div className="topic-details-body">
                    <p>{props.content}</p>
                </div>
            </div>
            <div className="topic-actions-container align-c row just-e">
                <a href={window.location.pathname + '/' + props.slug} className="BTN primary">Get Talking</a>
            </div>
        </div>
    );
}

export default TopicCard;