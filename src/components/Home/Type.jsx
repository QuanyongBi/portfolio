import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Indie Guitarist",
              "Committed Open Source Contributor",
              "Gamer"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 60,
          }}
        />
      )
}

export default Type