import React, { useEffect, useState } from 'react'

const FetchApi = () => {
const [posts,setPost]=useState([]);
 useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPost(posts.splice(0,10)))
    },[])

   
  return (
    <div>
      <h1>Fetch API Data</h1>
      {posts.map((post)=>
    <h1>{post.titile}</h1>
    )}
    </div>
  )
}

export default FetchApi
