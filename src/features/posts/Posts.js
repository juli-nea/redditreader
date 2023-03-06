import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from './postsSlice'

export const Posts = () => {

    const posts = useSelector(selectPosts);

    return (
        <div>
                <p>Posts</p>
                
                



        </div>
    )
}