import React from "react";
import { useParams } from "react-router";
import {useQuery, gql} from '@apollo/client';
import AddCommentForm from "../../components/forms/add-comment";
import CommentsFeed from "../../components/feeds/comments";

const Topic = () => {
    let {slug} = useParams();

    const FIND_SPECIFIC_TOPIC = gql`
    query FIND_SPECIFIC_TOPIC{
        topics(filters:{slug: {eq: "${slug}"}}){
            data{
                id
                attributes{
                    title
                    slug
                    content
                  	author{
                      data{
                        id
                        attributes{
                          username
                        }
                      }
                    }
                    comments{
                      data{
                        id
                        attributes{
                          title
                          content
                          createdAt
                          author{
                            data{
                              id
                              attributes{
                                username
                              }
                            }
                          }
                        }
                      }
                    }
                  	forum{
                      data{
                        id
                        attributes{
                          title
                          slug
                          main_image{
                            data{
                              id
                              attributes{
                                formats:url
                              }
                            }
                          }
                        }
                      }
                    }
                }
            }
        }
    }
    `;

    const { loading, error, data } = useQuery(FIND_SPECIFIC_TOPIC);
    if (loading) return 'Loading...';
    console.log(data.topics.data[0]);
    var topic = data.topics.data[0];
    return(
        <main className="main-content">
            <section className="topic-content">
                <div className="contain">
                    <div className="topic-head row align-c just-sb">
                        <h1>{topic.attributes.title}</h1>
                        <button className="BTN primary" onClick={() => window.history.back()}>Head Back</button>
                    </div>
                    <div className="topic-content-container">
                      {topic.attributes.content}
                    </div>
                    <CommentsFeed comments={topic.attributes.comments.data} />
                    <div className="add-comment-container">
                      <AddCommentForm />  
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Topic;