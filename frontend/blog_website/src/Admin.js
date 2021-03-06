import React, { useEffect, useState } from "react";
import PostLoadingComponent from './components/posts/PostsLoading';
import Blogposts from './components/admin/posts';
import axiosInstance from "./axios";
import './App.css';

function Admin() {
    const PostLoading = PostLoadingComponent(Blogposts);
    const [appState, setAppState] = useState({
        loading: true,
        posts: null,
    });

    useEffect(() => {
        axiosInstance.get().then ((res) => {
            const allPosts = res.data;
            setAppState({
                loading: false,
                posts: allPosts
            });
            console.log(res.data);
        });
    }, [setAppState]);

    return (
        <div className="App">
            <h1>Latest Posts</h1>
            <PostLoading isLoading={ appState.loading } posts={ appState.posts } />
        </div>
    );
}

export default Admin;