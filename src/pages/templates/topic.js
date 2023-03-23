import React, {useState} from "react";
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
                    createdAt
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
    var publishDate = new Date(data.topics.data[0].attributes.createdAt);
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
                      <p>{topic.attributes.content}</p>
                      <div className="topic-content-meta-container row align-c just-sb">
                        <div className="author-container">
                          <span className="author">Posted By <b>{topic.attributes.author.data.attributes.username}</b></span>
                        </div>
                        <div className="date-container">
                          <span className="date">{publishDate.toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <CommentsFeed comments={topic.attributes.comments.data} />
                    <div className="add-comment-container">
                      <AddCommentForm topic={topic.id}/>  
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Topic;