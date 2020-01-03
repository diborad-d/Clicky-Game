import React, { Component } from "react";
import Image from './Image';

class Game extends Component {
  render() {
    // console.log(this.props.game);
    return this.props.game.map((image) => (
        <Image/>
    ))
   
  }
}

export default Game;
