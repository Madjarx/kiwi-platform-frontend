import React from "react";
import { Card, Popover, Avatar } from "antd";
import { CloudDownloadOutlined, InfoCircleOutlined, AntDesignOutlined } from "@ant-design/icons";

// styles
import styles from "./styles";

const { Meta } = Card;

const Widget = (props) => {

  return (
    <>
      {/* <Card
        style={styles.container}
        hoverable
        actions={[
          <Popover placement="bottom" content={"Read More"}>
            <InfoCircleOutlined style={{ fontSize: "23px" }} />
          </Popover>,
          <Popover placement="bottom" content={"Download"}>
            <CloudDownloadOutlined style={{ fontSize: "26px" }} />
          </Popover>,
        ]}
      >
        <Meta
          title={props.title}
          avatar={<Avatar src={props.image} />}
        //   avatar={<Avatar icon={<AntDesignOutlined />} />}
          description={props.description}
        />
      </Card> */}
      <div style={styles.container}>
        nesto
      </div>
    </>
  );
};

export default Widget;
