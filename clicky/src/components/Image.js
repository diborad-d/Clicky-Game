import React, { Component } from "react";
import Img from "react-image";
class Image extends Component {
  render() {
    return (
      <div>
        <Img src={[" https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/4/4/1396571498371/2a8e7b6c-5bc3-4ee3-923d-eb56fd4e9518-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=c3382158eb046a840d0aedb991f9445c"]} />
      </div>
    );
  }
}
export default Image;
