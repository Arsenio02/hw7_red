import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAsync, deletePostAsync } from '../slices/postsSlice';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const status = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPostsAsync());
        }
    }, [status, dispatch]);

    const handleDeletePost = (postId) => {
        dispatch(deletePostAsync(postId));
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Post List</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.title} -{' '}
                        <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
