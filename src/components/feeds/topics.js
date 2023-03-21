import React from "react";
import {useQuery, gql} from '@apollo/client';
import TopicCard from "../cards/topic-card";


const TopicsFeed = () => {
    return(
        <div className="topics-feed column">
            <TopicCard title='Topic Title' content='Lorem Ipsum' slug='topic-title' />
        </div>
    )
}

export default TopicsFeed;