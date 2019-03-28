import React, { Component } from "react";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <form>
        <label>Name: </label>
        <input
          onChange={event => props.changeName(props.data, event.target.value)}
        />
        <div>{props.data.name}</div>
      </form>
    </div>
  );
}

export default App;
