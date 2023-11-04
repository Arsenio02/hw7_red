import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPosts, createPost, deletePost } from '../api/postsApi';

export const fetchPostsAsync = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetchPosts();
    return response.data;
});

export const createPostAsync = createAsyncThunk('posts/createPost', async (postData) => {
    const response = await createPost(postData);
    return response.data;
});

export const deletePostAsync = createAsyncThunk('posts/deletePost', async (postId) => {
    await deletePost(postId);
    return postId;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPostsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPostsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createPostAsync.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
            .addCase(deletePostAsync.fulfilled, (state, action) => {
                state.posts = state.posts.filter((post) => post.id !== action.payload);
            });
    },
});

export default postsSlice.reducer;
