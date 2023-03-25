import React from "react";
import ReplyCard from "../cards/reply-card";
import {useQuery, gql} from '@apollo/client';
const RepliesFeed = (props) => {
    const GET_REPLIES = gql`
    query GET_REPLIES{
        comment(id: ${props.comment}){
          data{
            attributes{
              replies{
                id
                reply
                author
              }
            }
          }
        }
      }
    `;
    const { loading, error, data } = useQuery(GET_REPLIES);
    if (loading) return 'Loading...';
    console.log(data.comment.data.attributes.replies)

    return(
        <div className="reply-feed column" id="replyFeed">
            {
                data.comment.data.attributes.replies.map((item) => (
                    <ReplyCard
                        key={item.id} 
                        author={item.author}
                        content={item.reply}
                    />
                ))
            }
        </div>
    )
}

export default RepliesFeed;