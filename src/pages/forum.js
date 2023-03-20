import React from "react";

import FeaturedForumsFeed from "../components/feeds/featured-forums";

const Forum = () => {
    return(
        <main className="main-content">
            <section className="forum-section">
                <div className="contain row">
                    <div className="forum-content-container">
                        <FeaturedForumsFeed />
                        <h3>All Forums</h3>
                    </div>
                    <div className="forum-sidebar">

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Forum;