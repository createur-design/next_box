import React, { useRef, useEffect } from "react";

function AudioPlayer(sound) {
  const useAudioPlayer = useRef();
  useEffect(() => {
    if (sound.title !== undefined) {
      LaunchMusic();
    }
  }, [sound]);
  console.log("title of sound:", sound.title);
  const LaunchMusic = () => {
    useAudioPlayer.current.play();
  };
  return (
    <div className="grid-container">
      <audio
        ref={useAudioPlayer}
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
