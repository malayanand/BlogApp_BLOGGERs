import React, { useEffect, useState } from "react";
import Blogposts from './components/posts/Blogposts';
import PostsLoadingComponent from './components/posts/PostsLoading';
import axiosInstance from './axios';
import './App.css';

function App(){
    const PostsLoading = PostsLoadingComponent(Blogposts);
    const [appState, setAppState] = useState({
        loading: false,
        posts: null,
    });

    useEffect(() => {
      axiosInstance.get().then((response) => {
        const allPosts = response.data;
        setAppState({ loading: false, posts: allPosts });
        console.log(response.data);
      });
    }, [setAppState]);

    return (
      <div className="App">
        <h1>Latest Posts</h1>
        <PostsLoading isLoading={appState.loading} posts={appState.posts} />
      </div>
    );
}

export default App;