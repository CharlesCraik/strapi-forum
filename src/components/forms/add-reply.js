import React, { useEffect, useState } from "react";
import ThisUser from "../../util/user-config";
import '../../stylesheets/form.scss';
import axios from 'axios';
import { MessageAdd1 } from "iconsax-react";
import GetUser from "../../query/get-user";


const AddReplyForm = (props) => {
    const [allReplies, setAllReplies] = useState();
    const [userReply, setUserReply] = useState();
    const currentUser = GetUser(ThisUser(localStorage.getItem('user')).payload.id);

    useEffect(() => {
        axios.get(`http://localhost:1337/api/comments/${props.commentID}?populate[0]=replies`).then(response => {
            setAllReplies(response.data.data.attributes.replies);
        });
    }, []);


    const AddReply = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:1337/api/comments/${props.commentID}?populate[0]=replies`).then(response => {
            setAllReplies(response.data.data.attributes.replies);
        });
        const currentReplies = allReplies;

        const reply = {
            reply: userReply,
            author: currentUser.attributes.username,
        };

        currentReplies.unshift(reply);
        setAllReplies(currentReplies);

        axios.put(`http://localhost:1337/api/comments/${props.commentID}?populate[0]=replies`, {
            data: {
                replies: currentReplies
            }
        })
        .then(() => {
            window.location.reload();
        })
    }

    return(
        <form className="content-form add-reply-form" id="addReply" name="addReply" onSubmit={AddReply}>
            <div className="inline-field-container">
                <textarea 
                    className="flat-input" 
                    id="addReplyContent" 
                    form="addReply" 
                    placeholder="Reply to this comment"
                    cols="auto"
                    rows="1"
                    required
                    onChange={(e) => setUserReply(e.target.value)}
                />
                <button type="submit" className="BTN inline-input" id="addReply"><MessageAdd1 size="20" color="#84889d" variant="Outline"/></button>
            </div>
        </form>
    )

}

export default AddReplyForm;