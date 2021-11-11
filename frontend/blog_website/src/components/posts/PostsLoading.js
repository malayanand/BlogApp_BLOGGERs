import React from "react";

function PostsLoading(Component) {
    return function PostsLoadingComponent({ isLoading, ...props }) {
        if (!isLoading)  return <Component {...props} />;
        return (
            <p style={{fontSize:'25px'}}>
                We are working on loading the data!...
            </p>
        );
    };
}

export default PostsLoading;