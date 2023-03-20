import React from "react";
import '../../stylesheets/card.scss';

const TrendingDiscussionCard = (props) => {
    return(
        <div className="trending-discussion-card row align-c">
            <div className="discussion-image-container">
                <img src={props.image} alt={'Image of ' + props.title} />
            </div>
            <div className="discussion-details column">
                <span className="discussion-title">
                    {props.title}
                </span>
                <a href={`/community/${props.slug}`} className="discussion-link">Discover More</a>
            </div>
        </div>
    )
}

export default TrendingDiscussionCard;