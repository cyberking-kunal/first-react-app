import React from "react";

function Label({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

export default Label;
