import React, {useState, useEffect} from "react";
import '../../stylesheets/form.scss';
import {useMutation, gql} from '@apollo/client';
import ThisUser from "../../util/user-config";

const AddTopic = (props) => {
    const [topic, setTopic] = useState([{
        title: '',
        content: '',
        author: null,
        forum: null,
    }]);
    const [slug, setSlug] = useState();

    useEffect(() => {
        topic.forum = parseInt(props.forum);
        topic.author = ThisUser(localStorage.getItem('user')).payload.id;
    }, []);

    const CREATE_TOPIC = gql`
    mutation CREATE_TOPIC(
        $title: String
        $content: String
        $author: ID
        $forum: ID
        $slug: String
    ){
        createTopic(data:{title: $title, slug: $slug, content: $content, author: $author, forum: $forum }){
            data{
                id
                attributes{
                    title
                    slug
                    author{
                        data{
                            id
                        }
                    }
                    content
                    forum{
                        data{
                            id
                        }
                    }
                }
            }
        }
    }
    `;
    const [NewTopic, { data, error }] = useMutation(CREATE_TOPIC, {
        variables: {
            title: topic.title,
            content: topic.content,
            author: topic.author,
            forum: topic.forum,
            slug: slug,
        },
        onCompleted: () => {
            window.location.reload();
        }
    });

    const CreateTopic = (event) => {
        event.preventDefault();

        let title = topic.title;
        let thisSlug = title.toLowerCase();
        setSlug(thisSlug.replace(/\s+/g, '-'));
        
        setTimeout(() => {NewTopic()}, 100);
        
    }

    return(
        <form className="content-form add-topic column" id="addTopicForm" name="addTopicForm" onSubmit={CreateTopic}>
            <div className="field-container">
                <label>Topic Title</label>
                <input
                    type="text"
                    className="global-input"
                    id="addTopicTitle"
                    placeholder="Enter topic title"
                    onChange={(e) => {setTopic({...topic, title: e.target.value})}}
                    required
                />
            </div>
            <div className="field-container">
                <label>Topic Content</label>
                <textarea
                    className="global-input"
                    id="addTopicContent"
                    rows='5'
                    placeholder="Share your thoughts"
                    onChange={(e) => {setTopic({...topic, content: e.target.value})}}
                />
            </div>
            <div className="actions-container row just-e">
                <button className="BTN tertiary" type="submit" id="addTopic">Create Topic</button>
            </div>
        </form>
    );
}

export default AddTopic;