import React, {useState} from "react";
import { useParams } from "react-router";
import {useQuery, gql} from '@apollo/client';

import AddTopic from "../../components/forms/add-topic";
import TopicsFeed from "../../components/feeds/topics";

const Discussion = () => {   
    let {slug} = useParams();

    const FIND_SPECIFIC_DISCUSSION = gql`
    query FIND_SPECIFIC_DISCUSSION{
        forums(filters:{slug: {eq: "${slug}"}}){
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
    
    const { loading, error, data } = useQuery(FIND_SPECIFIC_DISCUSSION);
    if (loading) return 'Loading...';
    var discussion = data.forums.data[0];
    console.log(discussion);
    return(
        <main className="main-content">
            <section className="discussion-section">
                <div className="contain">
                    <div className="discussion-head row align-c just-sb">
                        <h1>{discussion.attributes.title}</h1>
                        <button className="BTN primary" onClick={() => window.history.back()}>Head Back</button>
                    </div>
                    <div className="add-topic-container">
                        <AddTopic />
                    </div>
                    <TopicsFeed />
                </div>
            </section>
        </main>
    )
}

export default Discussion;