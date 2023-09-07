import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  Increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  Decrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  Reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return this.state.counter === 0 ? (
      <div class="main-box">
        <h1>Counter</h1>
        <h2>Click</h2>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
        <button onClick={this.Reset}>Reset</button>
      </div>
    ) : (
      <div class="main-box">
        <h1>Counter</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
        <button onClick={this.Reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
