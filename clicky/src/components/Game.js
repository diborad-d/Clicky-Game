import React, { Component } from "react";
import Image from "./Image";
import PropTypes from 'prop-types';
class Game extends Component {
  render() {
    // console.log(this.props.game);
    return this.props.game.map(image => <Image key={image.id} image={image} />);
  }

}

Game.propTypes = {
    image: PropTypes.array.isRequired 
}
export default Game;
