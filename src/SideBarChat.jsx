import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
function SideBarChat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat_info">
        <h2>Room Name</h2>
        <p>Last Message...</p>
      </div>
    </div>
  );
}

export default SideBarChat;
