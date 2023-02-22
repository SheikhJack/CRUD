import React from 'react';
import { useState, useEffect } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase-config';

const Home = () => {

  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);
  const postsCollectionRef = collection(db, 'posts')

  const getPosts = async() => {
    setLoading(false);
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    setLoading(false);
  }

  const deletePost = async(id) =>{
    const postDoc = doc(db, 'posts',id);
    await deleteDoc(postDoc);
    getPosts();
  }
  

  useEffect(() =>{
    getPosts();
  },[])

  if(loading){
    return <h3>Loading....</h3>
  }

  return (
    <div className='homepage'>
     {postList.length === 0 ? <h3>No post Added</h3> : postList.map((post) => {
      return( 
   <div key={post.id} className='card mb-4 shadow shadow-sm'>
    <div className='d-md-flex justify-content-md-end'></div>
      <button className='btn btn-danger my-3 mx-3' onClick={() => {deletePost(post.id)}}>
        Delete Post
      </button>
      <div className='card-body'>
        <h5 className='card-title mb-3 fw-bold'>{post.title}</h5>
        <p className='card-title mb-3'>{post.postTitle}</p>
        <span className='badge bg-dark'>{post.author.name}</span>
      </div>
    </div>
      )
     })}
    </div>
  )
}

export default Home