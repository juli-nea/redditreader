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
            
           

            <ul className="">

            {data && Object.values(data.data.children).map((theData, i) => (
            
                <li key={i}>
                <div className="post-container">
                <h2>{theData.data.title}</h2>
                <p>{theData.data.selftext}</p>
                <img src={theData.data.url}/>
                </div>
                </li>
             ))}

            </ul>

            <div className="fetch-status">
            {isLoading || isFetching ? (<p>Loading posts...</p>) : <p>Fetch completed</p>}
            </div>

        </div>
    )
}
