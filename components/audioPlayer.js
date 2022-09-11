import React, { useRef, useEffect } from "react";

function audioPlayer(sound) {
  const audioPlayer = useRef();
  useEffect(() => {
    if (sound.title !== undefined) {
      launchMusic();
    }
  }, [sound]);
  console.log("title of sound:", sound.title);
  const launchMusic = () => {
    audioPlayer.current.play();
  };
  return (
    <div className="grid-container">
      <audio
        ref={audioPlayer}
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

export default audioPlayer;
