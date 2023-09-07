import React from "react";
import CB from "./Child_Updating";

class CA extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }
  update = () => {
    this.setState({ value: 1 });
  };
  static getDerivedStateFromProps() {
    console.log("CA: getDerivedStateFromProps() called");
  }
  shouldComponentUpdate() {
    console.log("CA: shouldComponentUpdate() called");
    return true;
  }
  componentDidUpdate() {
    console.log("CA: componentDidUpdate() called");
  }
  getSnapshotBeforeUpdate() {
    console.log("CA: getSnapshotBeforeUpdate() called");
  }
  render() {
    console.log("CA: render() called");
    return (
      <div>
        <h1>CA Updating Phase {this.state.value}</h1>
        <CB />
        <button onClick={this.update}>Update</button>
      </div>
    );
  }
}
export default CA;
