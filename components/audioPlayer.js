import React, { useRef, useEffect } from "react";

function AudioPlayer(sound) {
  const AudioPlayer = React.createRef();
  useEffect(() => {
    if (sound.title !== undefined) {
      LaunchMusic();
    }
  }, [sound]);
  console.log("title of sound:", sound.title);
  const LaunchMusic = () => {
    AudioPlayer.current.play();
  };
  return (
    <div className="grid-container">
      <audio
        ref={AudioPlayer}
        preload="metadata"
        controls
        src={`/assets/music/${sound.title}`}
      ></audio>
      <p className="text-right">
        <b>{sound.title}</b>
      </p>
    </div>
  );
}

export default AudioPlayer;
