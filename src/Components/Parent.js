import React from "react";
import Child from "./Child";
var Parent = () => {
  return (
    <div>
      <h1>Users</h1>
      <Child FN="Toney" LN="Stark" />
      <Child FN="James" LN="Marry" />
      <Child FN="Vikram" LN="Rathod" />
    </div>
  );
};

export default Parent;
