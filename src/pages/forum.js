import React from "react";

import FeaturedForumsFeed from "../components/feeds/featured-forums";
import ForumsList from "../components/feeds/forums-list";
import TrendingDiscussions from "../components/feeds/trending-discussions";
import CategoryList from "../components/feeds/category-list";

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
                        <div className="current-user-container row align-c">
                            <div className="current-user-image">
                                <img />
                            </div>
                            <div className="current-user-details column">
                                <span className="user-name">John Smith</span>
                                <a href="#">Edit Profile</a>
                            </div>
                        </div>
                        <TrendingDiscussions />
                        <CategoryList />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Forum;