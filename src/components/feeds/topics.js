import { Sort } from "iconsax-react";
import React from "react";

import TopicCard from "../cards/topic-card";


const TopicsFeed = (props) => {
    // const FIND_FORUM_TOPICS = gql`
    // query FIND_FORUM_TOPICS{
    //     topics(filters:{forum: {id: {eq: "${props.forum}"}}}){
    //         data{
    //             id
    //             attributes{
    //                 title
    //                 slug
    //                 content
    //                 createdAt
    //                 author{
    //                     data{
    //                         id
    //                         attributes{
    //                             username
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    // `;
    // const { loading, error, data } = useQuery(FIND_FORUM_TOPICS);
    // if (loading) return 'Loading...';

    return(
        <div className="topics-feed column">
            {
                Array.from(props.topics.data).sort().reverse().map((item) => ( 
                <TopicCard key={item.id}
                title={item.attributes.title}
                slug={item.attributes.slug}
                content={item.attributes.content}
                author={item.attributes.author.data.attributes.username}
                published={item.attributes.createdAt}
                />  
                ))
            }
        </div>
    )
}

export default TopicsFeed;