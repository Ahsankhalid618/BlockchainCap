import React from "react";

const Container = (props) => {
  return (
    <div
      className={`container pt-2 pb-0 pr-2 pl-2 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;