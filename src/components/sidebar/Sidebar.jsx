// module imports
import React from "react";
import { Avatar, Popover } from "antd";
import { Link, NavLink } from "react-router-dom";

// components

//img imports
import kiwi from "./img/kiwi.png";
import settings from "./img/settings.png";
import dashboard from "./img/dashboard.png";
import marketplace from "./img/marketplace.png";

// styling
import styles from "./styles";

const Sidebar = () => {
  return (
    <>
      <div style={styles.container}>
        <Avatar src={kiwi} style={styles.icon} />
        {/* <Divider style={styles.divider}/> */}

        <Popover content={"Your Dashboard"} placement="right">
          <Link to="/dashboard">
            <Avatar shape="square" style={styles.button} />
          </Link>
        </Popover>

        <Popover content={"Widget Marketplace"} placement="right">
          <Link to="/marketplace">
            <Avatar shape="square" style={styles.button} />
          </Link>
        </Popover>

        <Popover content={"Settings & Account"} placement="right">
          <Link to="/settings">
            <Avatar shape="square" style={styles.button} src={settings} />
          </Link>
        </Popover>
      </div>
    </>
  );
};

export default Sidebar;
