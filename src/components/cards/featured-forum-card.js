import React from "react";
import '../../stylesheets/card.scss';


const FeaturedForumCard = (props) => {
    return(
        <div className="featured-forum-card column align-c just-e" style={{backgroundImage: `url(${props.image})`}}>
            <div className="forum-details column">
                <span className="forum-title">{props.title}</span>
                <a href="#" className="BTN secondary">Discover More</a>
            </div>
        </div>
    );
}

export default FeaturedForumCard;