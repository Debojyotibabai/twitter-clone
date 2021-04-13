import React, { useState } from "react";

// css
import "../Css/Sidebar.css";

// icon
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

// component
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  // sidebar options details
  const [option] = useState([
    { icon: <HomeIcon />, name: "Home", active: true },
    { icon: <SearchOutlinedIcon />, name: "Explore", active: false },
    { icon: <NotificationsNoneIcon />, name: "Notifications", active: false },
    { icon: <MailOutlineOutlinedIcon />, name: "Messages", active: false },
    { icon: <BookmarkBorderOutlinedIcon />, name: "Bookmarks", active: false },
    { icon: <ListAltOutlinedIcon />, name: "Lists", active: false },
    { icon: <PersonOutlineOutlinedIcon />, name: "Profile", active: false },
    { icon: <MoreHorizOutlinedIcon />, name: "More", active: false },
  ]);

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitter__icon" />

      {/* sidebar options */}
      {option.map((eachOption, eachOptionIndex) => {
        return (
          <SidebarOption
            icon={eachOption.icon}
            name={eachOption.name}
            active={eachOption.active}
            key={eachOptionIndex}
          />
        );
      })}

      {/* twitter button */}
      <button className="sidebar__tweet__button">Tweet</button>
    </div>
  );
};

export default Sidebar;
