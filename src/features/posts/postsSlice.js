import { createSlice } from '@reduxjs/toolkit';
import { getByTitle } from '@testing-library/react';

const initialState = {
    hello: 'hello'
    }


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;