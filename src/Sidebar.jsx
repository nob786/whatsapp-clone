import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SideBarChat from "./SideBarChat";
import db from "./firebase1";
function Sidebar() {
  const [rooms, setRooms] = useState([]);
  console.log("db instance", db.collection);

  // useEffect(() => {
  //   db.collection("rooms").snapshot((snapshot) =>
  //     setRooms(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     )
  //   );
  // });

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar_chats">
        <SideBarChat addNewChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
      </div>
    </div>
  );
}
export default Sidebar;
