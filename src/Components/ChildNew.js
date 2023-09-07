import React from "react";
class ChildN extends React.Component {
  transfer = () => {
    this.props.transferC("Data from Child");
  };
  render() {
    return (
      <div>
        <button onClick={this.transfer}>Transfer</button>
      </div>
    );
  }
}
export default ChildN;
