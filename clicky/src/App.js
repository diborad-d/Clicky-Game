import React, { Component } from "react";
import Game from "./components/Game";
import Image from './components/Image';
class App extends Component {
  state = {
    image: [
      {
        id: 1,
        imageSrc: "",
        clicked: false
      },
      {
        id: 2,
        clicked: false
      },
      {
        id: 3,
        clicked: false
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Game game={this.state.image} />
      </div>
    );
  }
}
export default App;
