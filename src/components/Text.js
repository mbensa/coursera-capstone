import React from "react";
import "./text.css";

export default function Text(props) {
  const { type, children, className } = props;
  const Tag = type;

  return <Tag className={className}>{children}</Tag>;
}
