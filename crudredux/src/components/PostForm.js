import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, ADD_POSTS } from "../actions/post.action";
import '../styles/postForm.css'

const PostForm = () => {
const [title, setTitle] = useState('');
const [content, setcontent] = useState('');
const user = useSelector(state=>state.userReducer);
const dispatch = useDispatch()

const handleForm = e =>{
  e.preventDefault();
  
    let data = {
      title,
      content,
      author:user[0].pseudo,
      likes:0
    }
  
  dispatch(addPosts(data))
  setTitle('')
  setcontent('')
}


  return (
    <div className="form-container">
      <form onSubmit={handleForm}>
        <input
         type="text"
         placeholder="Titre du poste"
         value={title}
         onChange={e =>setTitle(e.target.value) } />
        <textarea
         placeholder="Postez vos pensées..."
         value={content}
         onChange={e =>setcontent(e.target.value)}></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;