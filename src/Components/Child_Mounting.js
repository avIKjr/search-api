import React from "react";

class ComponentB extends React.Component {
  constructor() {
    super();
    //this.setState={}
    console.log("CB: construct() called");
  }
  static getDerivedStateFromProps() {
    console.log("CB: getDerivedStateFromProps() called");
  }
  componentDidMount() {
    console.log("CB: componentDidMount() called");
  }
  render() {
    console.log("CB: render() called");
    return (
      <div>
        <h1>CB Mounting Phase</h1>
      </div>
    );
  }
}

export default ComponentB;
