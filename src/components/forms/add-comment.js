import React, {useState, useEffect} from "react";
import ThisUser from "../../util/user-config";
import '../../stylesheets/form.scss';
import {useMutation, gql} from '@apollo/client';

const AddCommentForm = (props) => {
    const [comment, setComment] = useState([{
        title: '',
        content: '',
        author: null,
        topic: null,
    }]);

    useEffect(() => {
        comment.topic = parseInt(props.topic);
        comment.author = ThisUser(localStorage.getItem('user')).payload.id;
    }, []);

    const CREATE_COMMENT = gql`
    mutation CREATE_COMMENT(
        $title: String
        $content: String
        $author: ID
        $topic: ID
    ){
        createComment(data:{title: $title, content: $content, author: $author, topic: $topic }){
            data{
                id
                attributes{
                    title
                    author{
                        data{
                            id
                        }
                    }
                    content
                    topic{
                        data{
                            id
                        }
                    }
                }
            }
        }
    }
    `;
    const [NewComment, { data, error }] = useMutation(CREATE_COMMENT, {
        variables: {
            title: comment.title,
            content: comment.content,
            author: comment.author,
            topic: comment.topic,
        },
        onCompleted: () => {
            window.location.reload();
        }
    });

    const CreateComment = (event) => {
        event.preventDefault();
        NewComment();
        
    }

    return(
        <form className="content-form add-comment-form column" id="addCommentForm" name="addCommentForm" onSubmit={CreateComment}>
            <div className="field-container">
                <label>Comment Title</label>
                <input
                    type='text'
                    className="global-input"
                    id="addCommentTitle"
                    placeholder="Enter comment title"
                    onChange={(e) => {setComment({...comment, title: e.target.value})}}
                    required
                />
            </div>
            <div className="field-container">
                <label>Your Comment</label>
                <textarea
                    className="global-input"
                    id="addCommentContent"
                    rows='5'
                    onChange={(e) => {setComment({...comment, content: e.target.value})}}
                    placeholder="Share your thoughts"
                />
            </div>
            <div className="actions-container row just-e">
                <button type='submit' className="BTN tertiary" id="addComment">Respond To This Topic</button>
            </div>
        </form>
    )
}

export default AddCommentForm;