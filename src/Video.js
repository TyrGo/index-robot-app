import React from "react";
import reader from "./reader.mp4"
import reader2 from "./reader2.mp4"
import reader3 from "./reader3.mp4"
import reader4 from "./reader4.mp4"
import reader5 from "./reader5.mp4"

let movies = [reader, reader2, reader3, reader4, reader5];
console.log(movies)
let movie = movies[Math.floor(Math.random() * movies.length)];

function Video() {
  return (
    <video autoPlay muted loop id="myVideo">
      <source src={movie} type="video/mp4" />
    </video>
  )
}

export default Video;
