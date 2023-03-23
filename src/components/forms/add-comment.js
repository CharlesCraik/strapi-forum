import React from "react";

const AddCommentForm = () => {
    return(
        <form className="content-form add-comment-form column" id="addCommentForm" name="addCommentForm">
            <div className="field-container">
                <label>Comment Title</label>
                <input
                    type='text'
                    className="global-input"
                    id="addCommentTitle"
                    placeholder="Enter comment title"
                    required
                />
            </div>
            <div className="field-container">
                <label>Your Comment</label>
                <textarea
                    className="global-input"
                    id="addCommentContent"
                    rows='5'
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