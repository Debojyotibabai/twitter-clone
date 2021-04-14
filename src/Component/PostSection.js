import React from "react";

// css
import "../Css/PostSection.css";

// avatar
import Avatar from "@material-ui/core/Avatar";

// component
import Post from "./Post";

const PostSection = () => {
  return (
    // main post section
    <div className="post__section">
      <h1>Home</h1>

      {/* post input section */}
      <div className="post__input__section">
        <Avatar
          className="post__input__section__avatar"
          alt="Remy Sharp"
          src="https://pbs.twimg.com/profile_images/843141846960287744/QBgcs-ZD_400x400.jpg"
        />

        {/* post input */}
        <div className="post__input">
          <input type="text" placeholder="What's happening?" />
          <input type="text" placeholder="Any image link?" />
          <button className="tweet__button">Tweet</button>
        </div>
      </div>

      {/* all post */}
      <div className="all__post">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default PostSection;
