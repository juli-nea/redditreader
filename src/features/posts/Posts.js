import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from './postsSlice'
import { useGetAllProductsQuery } from '../apiSlice.js'

export const Posts = () => {

    const posts = useSelector(selectPosts);

    const { data, isLoading, isFetching } = useGetAllProductsQuery();

    console.log(data);

    return (
        <div>
            <p>Posts</p>

            {isLoading || isFetching ? (<p>Loading</p>) : <p>Completed</p>}

            {posts && Object.values(posts).map((post) => (
                <p key={post.id}>Hello this is post number {post.id} and the name is {post.text}</p>
            ))}
        </div>
    )
}
