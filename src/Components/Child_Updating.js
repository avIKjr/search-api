import React from "react";

class CB extends React.Component {
  static getDerivedStateFromProps() {
    console.log("CB: getDerivedStateFromProps() called");
  }
  shouldComponentUpdate() {
    console.log("CB: shouldComponentUpdate() called");
    return true;
  }
  componentDidUpdate() {
    console.log("CB: componentDidUpdate() called");
  }
  getSnapshotBeforeUpdate() {
    console.log("CB: getSnapshotBeforeUpdate() called");
  }
  render() {
    console.log("CB: render() called");
    return (
      <div>
        <h1>CB Updating Phase</h1>
      </div>
    );
  }
}
export default CB;
