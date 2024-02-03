'use client'

import React from "react";
import { DashboardLayout, PostForm, PostList } from "../components/reuseable";

export default function DashboardPage() {
    const [posts, setPosts] = React.useState([]);

    const handlePostSubmit = (newPost) => {
    // For simplicity, we're using a local state. In a real application, you would send the data to a server.
    setPosts((prevPosts) => [...prevPosts, { id: prevPosts.length + 1, ...newPost }]);
    };

    return (
    <DashboardLayout>
        <div>
            <PostForm onSubmit={handlePostSubmit} />
            <PostList posts={posts} />
        </div>
    </DashboardLayout>
    );
}