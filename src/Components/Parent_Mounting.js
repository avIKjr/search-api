import React from "react";
import ComponentB from "./Child_Mounting";

class ComponentA extends React.Component {
  constructor() {
    super();
    //this.setState={}
    console.log("CA: construct() called");
  }
  static getDerivedStateFromProps() {
    console.log("CA: getDerivedStateFromProps() called");
  }
  componentDidMount() {
    console.log("CA: componentDidMount() called");
  }
  render() {
    console.log("CA: render() called");
    return (
      <div>
        <h1>CA Mounting Phase</h1>
        <ComponentB />
      </div>
    );
  }
}

export default ComponentA;
