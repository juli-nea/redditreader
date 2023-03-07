import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from './postsSlice'
import { useGetAllProductsQuery } from '../apiSlice.js'

export const Posts = () => {

    const posts = useSelector(selectPosts);

    const { data, isLoading, isFetching } = useGetAllProductsQuery();

    if (data) {
        console.log(data)
    }

  

   

    return (
        <div>
            <p>Posts</p>

            {isLoading || isFetching ? (<p>Loading</p>) : <p>Completed</p>}

            

            {data && Object.values(data.data.children).map((theData, i) => (
            <p key={i}>{theData.data.title}</p>
             ))}

            

        </div>
    )
}
