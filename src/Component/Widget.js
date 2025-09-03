import React from "react";

// css
import "../Css/Widget.css";

// icon
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

// twitter embed - only use supported components
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Widget = () => {
  return (
    // main widget section
    <div className="widget">
      {/* widget search */}
      <div className="widget__serchbar">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search Twitter" />
      </div>

      {/* widget - using only supported timeline types */}
      <div className="widget__container">
        <h3>Twitter Timeline</h3>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
      </div>

      <div className="widget__container">
        <h3>Featured Tweet</h3>
        <TwitterTweetEmbed
          tweetId={'933354946111705097'}
        />
      </div>
    </div>
  );
};

export default Widget;
