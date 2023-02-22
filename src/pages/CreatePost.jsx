import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase-config';

const CreatePost = ({isAuth}) => {

const [title, setTitle] = useState('');
const [postTitle, setPostTitle] = useState('');

let navigate = useNavigate();

const postsCollectionRef = collection(db, 'posts');

const createPost = async() => {
  if(title === '' || postTitle === ''){
    alert('fill the fields');
    return false;
  }else{
    try{
      await addDoc(postsCollectionRef, {
        title,
        postTitle,
        author:{
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid
        }
      })
      console.log(auth)
      navigate('/');
    }catch(error){
      console.log(error);
    }
  }
}

useEffect(() =>{
  if(!isAuth){
    navigate("/login");
  }
}

)


  return (
    <div className='container'>
      <div className="bt-light p-5 rounded mt-3">
        <h1>Create a Post</h1>
        <div className="mb-3">
          <label htmlFor="title" className='form-label'>Title</label>
          <input type='text' placeholder='Title' className='form-control' onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Posts" className='form-label'>Posts</label>
          <textarea placeholder='Post...' className='form-control' onChange={(e) => setPostTitle(e.target.value)}></textarea>
        </div>
        <button className='btn btn-dark' onClick={createPost}>Submit Post</button>
      </div>

    </div>
  )
}

export default CreatePost