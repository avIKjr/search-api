import React from "react";

var Child = (props) => {
  return (
    <div>
      <h4>
        {props.FN} {props.LN}
      </h4>
    </div>
  );
};

export default Child;
