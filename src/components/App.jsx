import React, { useState, useEffect } from 'react';
import comics from '../data/constants';
import { useKeyCode } from '../hooks/useKeypress';
import useAudioPlayer from '../hooks/useAudioPlayer';

import './styles.css';

const App = () => {
  const [activeBlock, setActiveBlock] = useState(0);
  const [activeAudio, setActiveAudio] = useState(null);
  const blocksRef = React.useRef([]);
  const containerRef = React.createRef();
  const { setAudioPlaying } = useAudioPlayer();

  const moveRight = useKeyCode(39);
  const moveLeft = useKeyCode(37);

  // scroll on block changed
  useEffect(() => {
    if (activeBlock > 0 && blocksRef.current[activeBlock]) {
      window.scrollTo({
        behavior: 'smooth',
        top: blocksRef.current[activeBlock].offsetTop - 100,
      });
    }
    if (activeBlock > 0) {
      setActiveAudio(comics[0].audio);
      console.log(comics[activeBlock - 1].audio);
      setAudioPlaying(true);
    }
  }, [activeBlock]);

  // handle right click
  if (moveRight && comics.length > activeBlock) {
    setAudioPlaying(false);
    setActiveBlock(activeBlock + 1);
  }

  // handle left click
  if (moveLeft && activeBlock >= 1) {
    setAudioPlaying(false);
    setActiveBlock(activeBlock - 1);
  }

  // turn off on click
  const handleBlockClick = () => {
    console.log('click');
    setAudioPlaying(false);
  };

  return (
    <div className="container" ref={containerRef}>
      <div className="parent">
        {comics.map((obj, index) => (
          <div
            key={obj.image}
            ref={(el) => (blocksRef.current[index + 1] = el)}
            className={`div${index + 1} block ${
              index + 1 <= activeBlock ? 'active' : null
            }`}
            onClick={handleBlockClick}
          >
            {index + 1 === activeBlock && obj.audio && (
              <audio id="audio" loop={!!obj.audioLoop}>
                <source src={obj.audio} />
                Your browser does not support the <code>audio</code> element.
              </audio>
            )}
            <img src={obj.url} alt="" />
            {obj?.description && (
              <div className={`description ${obj.description.position}`}>
                {obj.description.text}
              </div>
            )}
          </div>
        ))}
      </div>
      {activeBlock === 0 && (
        <div
          className="hintButtons"
          onClick={() => {
            setActiveBlock(1);
          }}
        >
          <div className="hintButton left" />
          <div className="hintButton" />
        </div>
      )}
    </div>
  );
};

export default App;
