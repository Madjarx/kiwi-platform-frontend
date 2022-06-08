import React from "react";

// components
import Widget from './Widget/Widget';

// styles
import styles from "./styles";

// temporary imports
import widgetData from './widgetData';

const Marketplace = props => {
  return (
    <>
      <div style={styles.container}>
        {props.items.map(item => (
          <Widget 
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default Marketplace;
