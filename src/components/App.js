import React, { Component } from "react";
import AppHeader from "./AppHeader/AppHeader";
import AppBody from "./AppBody/AppBody";
import todo from "../apis/todo";

export default class App extends Component {
  state = { todos: todo };

  render() {
    return (
      <div className="container">
        STEPOUT
        <AppHeader />
        <AppBody todos={this.state.todos} />
      </div>
    );
  }
}
