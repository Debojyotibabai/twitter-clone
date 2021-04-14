import React, { useEffect, useState } from "react";

// css
import "../Css/PostSection.css";

// avatar
import Avatar from "@material-ui/core/Avatar";

// component
import Post from "./Post";

// firebase db
import db from "../firebase";

const PostSection = () => {
  // tweet input values
  const [tweetText, setTwitterText] = useState("");
  const [tweetImage, setTwitterImage] = useState("");

  // posts
  const [posts, setPosts] = useState([]);

  // get input values
  const getTweetText = (e) => {
    setTwitterText(e.target.value);
  };
  const getTweetImage = (e) => {
    setTwitterImage(e.target.value);
  };

  // tweet button function
  const tweet = () => {
    db.collection("post").add({
      avatar:
        "https://pbs.twimg.com/profile_images/843141846960287744/QBgcs-ZD_400x400.jpg",
      image: tweetImage,
      name: "Debojyoti Ghosh",
      text: tweetText,
      userName: "@debojyotibabai1",
    });
    setTwitterText("");
    setTwitterImage("");
  };

  // set posts value from firebase db
  useEffect(() => {
    db.collection("post").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

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
          <input
            onChange={getTweetText}
            type="text"
            placeholder="What's happening?"
            value={tweetText}
          />
          <input
            onChange={getTweetImage}
            type="text"
            placeholder="Any image link?"
            value={tweetImage}
          />
          <button
            onClick={tweet}
            className="tweet__button"
            disabled={tweetText !== "" ? false : true}
          >
            Tweet
          </button>
        </div>
      </div>

      {/* all post */}
      <div className="all__post">
        {posts.map((eachPost, eachPostIndex) => {
          return (
            <Post
              key={eachPostIndex}
              avatar={eachPost.avatar}
              name={eachPost.name}
              userName={eachPost.userName}
              text={eachPost.text}
              image={eachPost.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostSection;
