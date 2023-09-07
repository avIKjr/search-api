import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  //console.log(data);
  const handleChange = (event) => {
    let inputText = event.target.value;
    setText(inputText);
    if (inputText) {
      const newD = data.filter((item) => item.title.startsWith(inputText));
      setNewData(newD);
    }
  };
  //console.log(text);
  return (
    <div>
      <div className="input-group input-group-sm mb-3 container mt-3">
        {/* <span className="input-group-text" id="inputGroup-sizing-sm">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </span> */}
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          placeholder="type any letter"
          aria-describedby="inputGroup-sizing-sm"
          onChange={handleChange}
        />
      </div>
      <div className="row container-fluid p-3 m-3">
        {newData && text
          ? newData.map((value, i) => {
              return (
                <div
                  className="card col-2 m-5"
                  style={{ width: "18rem" }}
                  key={i}
                >
                  <img src={value.url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{value.title}</p>
                  </div>
                </div>
              );
            })
          : data.map((value, i) => {
              return (
                <div
                  className="card col-2 m-5"
                  style={{ width: "18rem" }}
                  key={i}
                >
                  <img src={value.url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{value.title}</p>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default App;
