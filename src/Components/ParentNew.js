import React from "react";
import ChildN from "./ChildNew";
import ChildN1 from "./ChildNew1";
class ParentN extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }
  HandelTransferC = (ReceivedValue) => {
    //document.getElementById("c").innerHTML = ReceivedValue;
    this.setState({ value: ReceivedValue });
  };
  render() {
    return (
      <div>
        <ChildN transferC={this.HandelTransferC} />
        <ChildN1 text={this.state.value} />
        <h1 id="c"> </h1>
      </div>
    );
  }
}
export default ParentN;
