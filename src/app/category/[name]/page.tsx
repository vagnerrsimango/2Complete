import React from "react";

export default function taskPage(props) {
  console.log(props);
  return <div>{props.params.name}</div>;
}
