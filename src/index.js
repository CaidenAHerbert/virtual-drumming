import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const kick = "/Sounds/kick.wav";
const snare = "/Sounds/snare.wav";
const hihat = "/Sounds/hihat.wav";
const openhat = "/Sounds/openhat.wav";
const ride = "/Sounds/ride.wav";
const crash = "/Sounds/crash.wav";

const DrumMachine = () => {
  const [activeKeys, setActiveKeys] = useState('');

  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log('Key pressed:', event.key)
      let audio;
      let keyPressed = event.key;
      switch(keyPressed) {
        case '1': // Press '1' to play the kick
          audio = new Audio(kick);
          break;
        case '2': // Press '2' to play the snare
          audio = new Audio(snare);
          break;
        case '3': // Press '3' to play the hihat
          audio = new Audio(hihat);
          break;
        case '4': // Press '4' to play the open hihat
          audio = new Audio(openhat);
          break;
        case '5': // Press '5' to play the ride
          audio = new Audio(ride);
          break;
        case '6': // Press '6' to play the crash
          audio = new Audio(crash);
          break;  
        default:
          return;
      }

      if (audio) {
        audio.play();
        setActiveKeys(prevKeys => [...new Set([...prevKeys, keyPressed])]);
      }
    };

    const handleKeyRelease = (event) => {
      setActiveKeys(prevKeys => prevKeys.filter(key => key !== event.key));
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyRelease);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyRelease);
    };
  }, []);

  return (
    <div className="drum-machine">
      <img src="/images/drumkit.png" alt="Drum Kit" />
      <div className="drum-pads">
        <button
          className={`drum-pad ${activeKeys.includes('1') ? 'active' : ''}`}
          onClick={() => {
            new Audio(kick).play();
            setActiveKeys(prevKeys => [...new Set([...prevKeys, '1'])]);
            setTimeout(() => setActiveKeys(prevKeys => prevKeys.filter(key => key !== '1')), 200);
          }}
        >
          Kick (1)
        </button>
        <button
          className={`drum-pad ${activeKeys.includes('2') ? 'active' : ''}`}
          onClick={() => {
            new Audio(snare).play();
            setActiveKeys(prevKeys => [...new Set([...prevKeys, '2'])]);
            setTimeout(() => setActiveKeys(prevKeys => prevKeys.filter(key => key !== '2')), 200);
          }}
        >
          Snare (2)
        </button>
        <button
          className={`drum-pad ${activeKeys.includes('3') ? 'active' : ''}`}
          onClick={() => {
            new Audio(hihat).play();
            setActiveKeys(prevKeys => [...new Set([...prevKeys, '3'])]);
            setTimeout(() => setActiveKeys(prevKeys => prevKeys.filter(key => key !== '3')), 200);
          }}
        >
          Hi-Hat (3)
        </button>
        <button
          className={`drum-pad ${activeKeys.includes('4') ? 'active' : ''}`}
          onClick={() => {
            new Audio(openhat).play();
            setActiveKeys(prevKeys => [...new Set([...prevKeys, '4'])]);
            setTimeout(() => setActiveKeys(prevKeys => prevKeys.filter(key => key !== '4')), 200);
          }}
        >
          Open Hi-Hat (4)
        </button>
        <button
          className={`drum-pad ${activeKeys.includes('5') ? 'active' : ''}`}
          onClick={() => {
            new Audio(ride).play();
            setActiveKeys(prevKeys => [...new Set([...prevKeys, '5'])]);
            setTimeout(() => setActiveKeys(prevKeys => prevKeys.filter(key => key !== '5')), 200);
          }}
        >
          Ride (5)
        </button>
        <button
          className={`drum-pad ${activeKeys.includes('6') ? 'active' : ''}`}
          onClick={() => {
            new Audio(crash).play();
            setActiveKeys(prevKeys => [...new Set([...prevKeys, '6'])]);
            setTimeout(() => setActiveKeys(prevKeys => prevKeys.filter(key => key !== '6')), 200);
          }}
        >
          Crash (6)
        </button>
      </div>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DrumMachine />);
