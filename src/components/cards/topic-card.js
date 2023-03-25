import React, {useEffect, useState} from "react";
import '../../stylesheets/card.scss';
import { Like1 } from "iconsax-react";
import ThisUser from "../../util/user-config";
import {useMutation, gql} from '@apollo/client';

const TopicCard = (props) => {
    const [publishDate] = useState(new Date(props.published));
    const [likes, setLikes] = useState(props.likes);

    const LIKE_TOPIC = gql`
    mutation TOPIC_LIKE(
        $likes: Int
    ){
        updateTopic(id: ${props.identifier}, data:{likes: $likes}){
            data{
                id
                attributes{
                    likes
                }
            }
        }
    }
    `;

    const [LikeTopic, {data, error}] = useMutation(LIKE_TOPIC, {
        variables: {
            likes: likes
        }
    });

    return(
        <div className="topic-card column">
            <div className="topic-card-head row just-sb align-c">
                <span className="topic-title">{props.title}</span>
                {/* <div className="topic-short-actions-container row align-c just-e">
                    <button className="BTN icon" name="like-post" onClick={() => {setLikes(likes + 1); LikeTopic()}}><Like1 size="24" color="#171E45" variant="Outline"/></button>
                </div> */}
            </div>
            <div className="topic-card-meta row just-sb align-c">
                <div className="topic-creator-container column">
                    <span className="topic-author">{props.author}</span>
                    <span className="topic-publish-date">{publishDate.toLocaleDateString()}</span>
                </div>
                <div className="topic-categories-container row align-c just-e">
                    
                </div>
            </div>
            <div className="topic-content-container column align-s">
                <p>{props.content}</p>
                <a className="BTN primary" href={window.location.pathname + '/' + props.slug}>Comment</a>
            </div>
        </div>
    );
}

export default TopicCard;