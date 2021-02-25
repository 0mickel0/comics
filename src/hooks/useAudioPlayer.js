import { useState, useEffect } from 'react';

function useAudioPlayer() {
  const [playing, setAudioPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById('audio');
    if (audio) {
      playing ? audio.play() : audio.pause();
    }
  });

  return {
    playing,
    setAudioPlaying,
  };
}

export default useAudioPlayer;
