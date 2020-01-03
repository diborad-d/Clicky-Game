import React, { Component } from "react";
import Image from "./Image";
import PropTypes from 'prop-types';
class Game extends Component {
  render() {
    // console.log(this.props.game);
    return this.props.game.map(x => <Image key={x.id} id={x.id} imgSrc={x.imgSrc}/>);
    // line 7: proptype requires id= number, imgsrc= string
  }

}

Game.propTypes = {
    game: PropTypes.array.isRequired 
}
export default Game;
