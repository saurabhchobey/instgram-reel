import React from "react";

import Video from "./components/Video/Video";
import ReactRoundedImage from "react-rounded-image";



import Vid1 from "./videos/vid1.mp4";
import Vid21 from "./videos/Vid21.mp4";
import Vid3 from "./videos/vid3.mp4";

import "./App.css";

export default function App() {
  const data = [
    {
      img1:"https://farm2.staticflickr.com/1663/25814974803_d4c55ff708_b.jpg",
      channel: "jai",
      song: "song-1",
      url: Vid1,
      likes: "32",
      comment: "2",
      shares: "23",
    },
    { img1:"",
      channel: "bbb",
      song: "kya karu",
      url: Vid21,
      likes: "3",
      comment: "22",
      shares: "23",
    },
    { img1:"https://farm2.staticflickr.com/1638/26145024230_06acd55d1b_b.jpg",
      channel: "illahi",
      song: "song-3",
      url: Vid3,
      likes: "89",
      comment: "23",
      shares: "29",
    },
  ];

  return (
    <div className="App">
      <center>
        {/* <div className="logo">
          <img alt="logo" src={Logo} className="insta-logo" />
        </div>
        <h3>Reel</h3> */}
        {/*  */}

        <div className="video-container" id="video-container">
        {/* <ReactRoundedImage image={img1}
        roundedColor="#321124"
        imageWidth="50"
        imageHeight="50"
        roundedSize="15"
        borderRadius="70" />
           */}

          {data.map((list, i) => (
            <ReactRoundedImage
            key={i}
             image={list.img1}
            roundedColor="#321124"
            imageWidth="50"
            imageHeight="50"
            roundedSize="15"
            borderRadius="70" />,
             <Video
              key={i}
              channel={list.channel}
              song={list.song}
              url={list.url}
              likes={list.likes}
              comment={list.comment}
              shares={list.shares}
            />
          ))}

          {/*  */}
        </div>
      </center>
    </div>
  );
}
