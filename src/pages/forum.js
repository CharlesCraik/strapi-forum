import React, {useEffect, useState} from "react";
import ThisUser from "../util/user-config";
import GetUser from "../query/get-user";

import FeaturedForumsFeed from "../components/feeds/featured-forums";
import ForumsList from "../components/feeds/forums-list";
import TrendingDiscussions from "../components/feeds/trending-discussions";
import CategoryList from "../components/feeds/category-list";
import { useNavigate } from "react-router-dom";

const Forum = () => {
    var navigate = useNavigate();
    const currentUser = GetUser(ThisUser(localStorage.getItem('user')).payload.id);
    console.log(currentUser);


    if(currentUser){
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
                                <span className="user-name">{currentUser.attributes.username}</span>
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
}

export default Forum;