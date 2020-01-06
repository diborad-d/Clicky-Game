import React, { Component } from "react";
import Img from "react-image";
import App from "../App";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Button";
import FormRow from "@material-ui/core/Button";

class Image extends Component {
  render() {
    return (
      // <div>
      //   {/* <p> {this.props.id} </p> */}

      // </div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Img style={{ height: "200px", width: "200px" }} src={[this.props.imgSrc]} />
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Img style={{ height: "200px", width: "200px" }} src={[this.props.imgSrc]} />
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Img style={{ height: "200px", width: "200px" }} src={[this.props.imgSrc]} />
          <FormRow />
        </Grid>
      </Grid>
    );
  }
}
Image.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired
};
export default Image;
