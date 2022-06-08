import React from "react";
import { Spin } from "antd";

import styles from "./styles";

const Dashboard = () => {
  return (
    <>
      <div style={styles.container}>
        <span>You don't have any modules yet</span>
        <Spin />
      </div>
    </>
  );
};

export default Dashboard;
