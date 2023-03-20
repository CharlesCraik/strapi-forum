import React from "react";
import {useQuery, gql} from '@apollo/client';
import TrendingDiscussionCard from "../cards/trending-discussion-card";


const TrendingDiscussions = () => {

    const FIND_TRENDING_DISCUSSIONS = gql`
    query FIND_TRENDING_DISCUSSIONS{
        forums(pagination: {limit: 5}){
            data{
                id
                attributes{
                    title
                    slug
                    main_image{
                        data{
                            attributes{
                                formats: url
                            }
                        }
                    }
                }
            }
        }
    }
    `;

    const { loading, error, data } = useQuery(FIND_TRENDING_DISCUSSIONS);
    if (loading) return 'Loading...';
    return(
        <div className="trending-discussions-container column">
            <div className="trending-discussions-head">
                <h3>Trending Discussions</h3>
            </div>
            <div className="trending-discussions-feed">
            {
                data.forums.data.map((item) => ( 
                <TrendingDiscussionCard key={item.id}
                title={item.attributes.title}
                image={`${process.env.REACT_APP_BACKEND}` + item.attributes.main_image.data.attributes.formats}
                slug={item.attributes.slug}
                />  
                ))
            }
            </div>
        </div> 
    )
}

export default TrendingDiscussions