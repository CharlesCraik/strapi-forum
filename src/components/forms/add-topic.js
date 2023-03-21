import React from "react";
import '../../stylesheets/form.scss';

const AddTopic = () => {

    const CreateTopic = (event) => {
        event.preventDefault();
        console.log('New topic created');
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
                />
            </div>
            <div className="actions-container row just-e">
                <button className="BTN tertiary" type="submit" id="addTopic">Create Topic</button>
            </div>
        </form>
    );
}

export default AddTopic;