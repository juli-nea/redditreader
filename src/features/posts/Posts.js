import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from './postsSlice'

export const Posts = () => {

    const posts = useSelector(selectPosts);

    return (
        <div>
                <p>Posts</p>
                
                {Object.values(posts).map((post) => (
                    <p key={post.id}>Hello this is post number {post.id} and the name is {post.text}</p>
          
        ))}



        </div>
    )
}