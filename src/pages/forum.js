import React from "react";

import FeaturedForumsFeed from "../components/feeds/featured-forums";
import ForumsList from "../components/feeds/forums-list";

const Forum = () => {
    return(
        <main className="main-content">
            <section className="forum-section">
                <div className="contain row">
                    <div className="forum-content-container">
                        <FeaturedForumsFeed />
                        <ForumsList />
                    </div>
                    <div className="forum-sidebar">

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Forum;