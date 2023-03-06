import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: {
        id: '1',
        title: 'title',
        text: 'text'
    }
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;