import React from "react";
import "../Styles/MernStack.css";

class MERN extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      FN: "",
      RN: "",
    };
  }

  handleClick = () => {
    this.setState({ isClicked: true });
  };

  handleName = (event) => {
    this.setState({ FN: event.target.value });
  };

  handleRollNumber = (event) => {
    this.setState({ RN: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const fn = this.state.FN;
    const rn = this.state.RN;
    const { FN, RN } = this.state;
    if (FN === "" && !Number(RN)) {
      alert("Name can not be empty and Roll number has to be a number.");
    } else {
      console.log(fn, rn);
      this.setState({ isClicked: "" });
    }
  };

  again = () => {
    this.setState({ isClicked: false });
  };

  render() {
    if (this.state.isClicked === false) {
      return (
        <div className="first-div">
          <h1>MERN stack Developer</h1>
          <button onClick={this.handleClick}>Apply Now</button>
        </div>
      );
    } else if (this.state.isClicked === true) {
      return (
        <div className="div">
          <h1>MERN stack Developer</h1>
          <form onSubmit={this.handleSubmit}>
            <h2>Enter your Name: </h2>
            <input type="text" onChange={this.handleName} className="text" />
            <h2>Enter Roll Number: </h2>
            <input
              type="text"
              onChange={this.handleRollNumber}
              className="text"
            />
            <br />
            <input type="submit" value="Submit Now" className="submit" />
            <button onClick={this.again} className="b">
              Back
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="last-div">
          <h1>Form Submitted Successfully</h1>
          <button onClick={this.again}>Register Again</button>
        </div>
      );
    }
  }
}

export default MERN;
