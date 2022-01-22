import React from "react";
import { useSelector } from "react-redux";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { isEmpty } from './components/Utils'
//la fonction isEmpty intervient au pour le raffraichissent de la page, car autrement on a une erreur map is not a function du fait que const posts = useSelector(state=>state.postReducer n'a pas eu le temps d'être exécuté)

const App = () => {

  const posts = useSelector(state=>state.postReducer);
  const users = useSelector(state=>state.userReducer);
  console.log(users);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {!isEmpty(posts) && posts.map((post,index)=>
            <Post key={index} post={post} />
          )}
        </div>
        {!isEmpty(users) && users.map((user,i)=>
          <User key={i} user={user}/>)}
      </div>
    </div>
  );
};

export default App;