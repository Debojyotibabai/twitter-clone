import React from "react";

// css
import "../Css/Widget.css";

// icon
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

// twitter embed
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterMomentShare,
  TwitterVideoEmbed,
} from "react-twitter-embed";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__serchbar">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        options={{ height: 400 }}
      />
      <TwitterVideoEmbed id={"560070183650213889"} />
      <TwitterMomentShare momentId={"650667182356082688"} />
      <TwitterShareButton
        url={"https://www.facebook.com/profile.php?id=100008004977942"}
        options={{
          text: "Can you be a Web Developer?",
          via: "debojyotibabai1",
        }}
      />
    </div>
  );
};

export default Widget;
