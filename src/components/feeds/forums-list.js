import React from "react";
import {useQuery, gql} from '@apollo/client';
import ForumCard from "../cards/forum-card";

const ForumsList = () => {
    const FIND_NON_FEATURED_FORUMS = gql`
    query FIND_NON_FEATURED_FORUMS{
        forums(filters: {forum_category: {id: {eq: null}}}){
            data{
                id
                attributes{
                    title
                    slug
                    description
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

    const { loading, error, data } = useQuery(FIND_NON_FEATURED_FORUMS);
    if (loading) return 'Loading...';
    console.log(data.forums.data);

    return(
        <div className="forums-feed column">
            {
                data.forums.data.map((item) => ( 
                <ForumCard key={item.id}
                title={item.attributes.title}
                image={`${process.env.REACT_APP_BACKEND}` + item.attributes.main_image.data.attributes.formats}
                slug={item.attributes.slug}
                description={item.attributes.description}
                />  
                ))
            }
        </div>
    )
}

export default ForumsList;