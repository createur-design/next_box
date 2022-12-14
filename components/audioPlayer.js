import React, { useRef, useEffect } from "react";

function AudioPlayer(music) {
  const useAudioPlayer = useRef();
  useEffect(() => {
    if (music.title !== undefined) {
      LaunchMusic();
    }
  }, [music]);
  const LaunchMusic = () => {
    useAudioPlayer.current.play();
  };
  return (
    <div>
      <audio
        ref={useAudioPlayer}
        preload="metadata"
        controls
        src={music.title ? `/assets/music/${music.title}` : ""}
      ></audio>
      <p className="text-right">
        <b>{music.title}</b>
      </p>
    </div>
  );
}

export default AudioPlayer;
