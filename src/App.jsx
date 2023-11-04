import React from 'react';
import PostList from './components/PostsList.jsx';
import PostForm from './components/PostForm';

function App() {
    return (
        <div>
            <h1>My Blog</h1>
            <PostForm />
            <PostList />
        </div>
    );
}

export default App;
