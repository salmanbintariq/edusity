import React, { useRef } from "react";
import videoFile from "../assets/video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e)=>{
    if (e.target === player.current){
      setPlayState(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-1000 bg-black/90 flex items-center justify-center transition-all duration-500 ${playState ? "" : "hidden"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video
        src={videoFile}
        autoPlay
        muted
        className="w-[90%] max-w-225 rounded-lg border-4 border-white"
      ></video>
    </div>
  );
};

export default VideoPlayer;
