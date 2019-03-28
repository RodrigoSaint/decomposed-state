import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function changeName(data, name) {
  return Object.assign({}, data, { name });
}

class State {
  constructor() {
    this.name = "";
  }
}

const state = new State();

function render(data) {
  const changeNameTrigger = (data, change) => render(changeName(data, change));
  ReactDOM.render(
    <App changeName={changeNameTrigger} data={data} />,
    document.getElementById("root")
  );
}

render(state);
