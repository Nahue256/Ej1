import React, { Component } from "react";

import Schedules from "./components/schedules";

import Horarios from "./components/data/data";

class App extends Component {
  state = {
    horarios: Horarios,
  };
  render() {
    return (
      <div>
        <Schedules horarios={this.state.horarios} />
      </div>
    );
  }
}

export default App;
