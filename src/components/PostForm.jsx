import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPostAsync } from '../slices/postsSlice';

const PostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleCreatePost = () => {
        if (title.trim() !== '') {
            dispatch(createPostAsync({ title }));
            setTitle('');
        }
    };

    return (
        <div>
            <h2>Create a New Post</h2>
            <input
                type="text"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleCreatePost}>Create</button>
        </div>
    );
};

export default PostForm;
