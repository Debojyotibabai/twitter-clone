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

const Post = () => {
  return (
    // main post
    <div className="post">
      {/* post details section */}
      <div className="post__details__section">
        <Avatar
          className="post__details__section__avatar"
          alt="Remy Sharp"
          src="https://pbs.twimg.com/profile_images/843141846960287744/QBgcs-ZD_400x400.jpg"
        />

        {/* post details */}
        <div className="post__details">
          {/* post details header */}
          <div className="post__header">
            <h1>
              Debojyoti Ghosh <span>@debojyotibabai1</span>
            </h1>
            <IconButton aria-label="Delete" className="post__delete">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>

          {/* post text */}
          <h2>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here,
          </h2>

          {/* post image */}
          <img
            src="https://images.unsplash.com/photo-1611095564350-2cbe940a8d99?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
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
