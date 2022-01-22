import React from "react";
import clap from "../styles/clap.png"

const Like = ({ post }) => {
  return (
    <div>
      <img src={clap} className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
