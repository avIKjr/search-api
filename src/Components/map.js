/* eslint-disable eqeqeq */
import React from "react";
import "../Styles/map.css";
class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      originalArray: [],
      typeId: null,
      filteredArray: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((output) =>
        this.setState({ originalArray: output, filteredArray: output })
      )
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    this.setState({ typeId: event.target.value });
  };

  handleSubmit = () => {
    const { originalArray, typeId } = this.state;
    let arr;

    if (typeId != "") {
      arr = originalArray.filter((item) => item.id == typeId);
    } else {
      arr = originalArray;
    }

    this.setState({ filteredArray: arr });
  };

  render() {
    // const { originalArray } = this.state;
    const { filteredArray } = this.state;
    return (
      <div className="main">
        <input
          type="text"
          placeholder="Search by Id"
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleSubmit}>Search</button>
        {filteredArray.map((value, index) => {
          return (
            <div className="div" key={index}>
              <table border={1}>
                <tr>
                  <td className="td">ID</td>
                  <td className="td">Name</td>
                  <td className="td">Email</td>
                  <td className="td">Mobile No.</td>
                </tr>
                <tr>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Map;
