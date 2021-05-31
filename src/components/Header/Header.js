import React from "react";
import ReactRoundedImage from "react-rounded-image";



import CameraAltIcon from "@material-ui/icons/CameraAlt";

import "./Header.css";

export default function Header() {
  const image='https://farm2.staticflickr.com/1663/25814974803_d4c55ff708_b.jpg'
  return (
    <div className="video-header">
      <ReactRoundedImage image={image}
        roundedColor="#321124"
        imageWidth="50"
        imageHeight="50"
        roundedSize="15"
        borderRadius="70" />
        {/* <ReactRoundedImage
          image={image}
          roundedColor="#321124"
          imageWidth="15"
          imageHeight="15"
          roundedSize=""
          borderRadius="70"
        />
      <image></image> */}
      <h3 color= 'black'>test</h3>
      <CameraAltIcon />
    </div>
  );
}
