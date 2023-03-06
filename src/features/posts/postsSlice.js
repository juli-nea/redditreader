import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    1: {
    id: 1,
    text: 'Julia'
    },
    2: {
        id: 2,
        text: 'Peder'
        }
}


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;