import React from "react";
import '../styles/user.css'

const User = ({user}) => {
  return (
    <div className="user-container">
      <div className="user">
        <h3>{user.pseudo}</h3>
        <img src="https://thispersondoesnotexist.com/image" alt="" />
        <p>Age : 35 ans</p>
        <p>Like{user.likes >1 && 's'} : {user.likes}</p>
      </div>
    </div>
  );
};

export default User;