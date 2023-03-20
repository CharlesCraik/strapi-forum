import React from "react";
import FeaturedForumCard from "../cards/featured-forum-card";
import {useQuery, gql} from '@apollo/client';

const FeaturedForumsFeed = () => {

    const FIND_FEATURED_FORUMS = gql`
    query FIND_FEATURED_FORUMS{
        forums(filters: {forum_category: {id: {eq: 1}}}, pagination: {limit: 3}){
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

    const { loading, error, data } = useQuery(FIND_FEATURED_FORUMS);
    if (loading) return 'Loading...';

    if (error) return `Error! ${error.message}`;
    return(
        <div className="featured-forums-feed row">
            {
                data.forums.data.map((item) => ( 
                <FeaturedForumCard key={item.id}
                title={item.attributes.title}
                image={`${process.env.REACT_APP_BACKEND}` + item.attributes.main_image.data.attributes.formats}
                slug={item.attributes.slug}
                />  
                ))
            }
        </div>
    );
}

export default FeaturedForumsFeed;