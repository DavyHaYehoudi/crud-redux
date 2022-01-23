import React, { useState } from "react";
import Like from "./Like";
import '../styles/post.css'
import { useDispatch, useSelector } from "react-redux";
import editImg from '../styles/edit.png';
import deleteImg from '../styles/delete.png';
import { isEmpty } from "./Utils";
import { deletePosts, editPosts } from "../actions/post.action";

const Post = ({ post }) => {
  const storeUsers = useSelector(state=>state.userReducer);
  const currentUser = storeUsers[0].pseudo;
  const [isEditing, setIsEditing] =useState(false);
  const [editContent, setEditContent]=useState('');
  const dispatch= useDispatch();
  console.log('post',post);

  const handleEdit =()=>{
    setIsEditing(true)
  }

  const handleValidEdit =(e) => {
    e.preventDefault();

    let editData ={
      title: post.title,
      content: editContent,
      author: post.author,
      likes: post.likes,
      id: post.id
    }

    dispatch(editPosts(editData,post.id))
    setIsEditing(false)
  }

  const handleDelete=()=>{
    dispatch(deletePosts(post.id))
  }

  return (
    <div className="post">
      {!isEmpty(currentUser) && currentUser===post.author &&
      (
        <div className='edit-delete'>
          <img src={editImg} alt='' onClick={handleEdit}/>
          <img src={deleteImg} alt='' onClick={handleDelete}/>
        </div>
      )}
      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      {isEditing ?
      <form onSubmit={handleValidEdit}> 

        <textarea
          defaultValue={post.content}
          autoFocus
          onChange={(e)=> setEditContent(e.target.value)}>
        </textarea>

        <input
          type='submit'
          value="valider" />

       </form>
      :
      <p>{post.content}</p>
      }

      <div className="author">

        <h5>{post.author}</h5>
        <Like post={post} />
        
      </div>
    </div>
  );
};

export default Post;