import React from "react";
import CommentCard from "../cards/comments-card";

const CommentsFeed = (props) => {
    
    return(
        <div className="comments-feed column">
            {
                Array.from(props.comments).sort().reverse().map((item) => ( 
                <CommentCard key={item.id}
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

export default CommentsFeed;