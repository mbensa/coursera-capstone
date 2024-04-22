import React from "react";
import Text from "./Text";
import "./button.css";

export default function Button(props) {
  const { children } = props;

  return (
    <div className={"btn"}>
      <Text type="h5">{children}</Text>
    </div>
  );
}
