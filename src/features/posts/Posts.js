import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from './postsSlice'

export const Post = () => {

    const posts = useSelector(selectPosts);

    return (
        <div>
                <p>Posts</p>
                
                {Object.values(posts).map((post) => (
                    <p>Hello</p>
                ))}



        </div>
    )
}