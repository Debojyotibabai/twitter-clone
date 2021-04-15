import React from "react";

// avatar
import Avatar from "@material-ui/core/Avatar";

// css
import "../Css/Post.css";

// icon
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";

const Post = (props) => {
  return (
    // main post
    <div className="post">
      {/* post details section */}
      <div className="post__details__section">
        <Avatar
          className="post__details__section__avatar"
          alt="Remy Sharp"
          src={props.avatar}
        />

        {/* post details */}
        <div className="post__details">
          {/* post details header */}
          <div className="post__header">
            <h1>
              {props.name} <span>{props.userName}</span>
            </h1>
            <IconButton
              aria-label="Delete"
              className="post__delete"
              onClick={props.deleteTwitter}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>

          {/* post text */}
          <h2>{props.text}</h2>

          {/* post image */}
          <img src={props.image} alt="" />
        </div>
      </div>

      {/* post bottom icons */}
      <div className="post__buttons">
        <IconButton aria-label="Reply">
          <ChatBubbleOutlineOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="Retweet">
          <RedoOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="Like">
          <FavoriteBorderOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="Share">
          <PublishOutlinedIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default Post;
