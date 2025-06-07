import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import TopBar from '../components/TopBar';

const numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 30, 31, 32, 40, 41, 42,
  50, 51, 52, 60, 61, 62, 70, 71, 72,
  80, 81, 82, 90, 91, 92,
  100, 101, 102,
  1000, 2000,
  10000, 20000,
  100000, 200000,
  1000000, 2000000
];

const numberWords = [
  'Nul', 'Een', 'Twee', 'Drie', 'Vier', 'Vijf', 'Zes', 'Zeven', 'Acht', 'Negen', 'Tien',
  'Elf', 'Twaalf', 'Dertien', 'Veertien', 'Vijftien', 'Zestien', 'Zeventien', 'Achttien', 'Negentien', 'Twintig',
  'Eenentwintig', 'Tweeëntwintig', 'Dertig', 'Eenendertig', 'Tweeëndertig', 'Veertig', 'Eenenveertig', 'Tweeënveertig',
  'Vijftig', 'Eenenvijftig', 'Tweeënvijftig', 'Zestig', 'Eenenzestig', 'Tweeënzestig', 'Zeventig', 'Eenenzeventig', 'Tweeënzeventig',
  'Tachtig', 'Eenenachtig', 'Tweeëntachtig', 'Negentig', 'Eenennegentig', 'Tweeënnegentig',
  'Honderd', 'Honderdeen', 'Honderdtwee',
  'Duizend', 'Tweeduizend',
  'Tienduizend', 'Twintigduizend',
  'Honderdduizend', 'Tweehonderdduizend',
  'Een miljoen', 'Twee miljoen'
];

export default function Numbers() {
  const [index, setIndex] = useState(0);
  const [isMuted, setMuted] = useState(false);

  const currentNumber = numbers[index];

  useEffect(() => {
    if (!isMuted) {
      const audio = new Audio(`/sounds/numbers/${currentNumber}.mp3`);
      audio.play();
    }
  }, [index]);

  return (
    <Layout>
      <TopBar
        index={index}
        total={numbers.length}
        isMuted={isMuted}
        toggleMute={() => setMuted(!isMuted)}
      />
      <div className="center-section">
        <div className="letter-display">{currentNumber}</div>
        <div className="word-display">{numberWords[index]}</div>
        <div className="bottom-controls">
          <button onClick={() => index > 0 && setIndex(index - 1)}>⬅️</button>
          <button onClick={() => {
            if (!isMuted) {
              const audio = new Audio(`/sounds/numbers/${currentNumber}.mp3`);
              audio.play();
            }
          }}>🔊</button>
          <button onClick={() => index < numbers.length - 1 && setIndex(index + 1)}>➡️</button>
        </div>
      </div>
    </Layout>
  );
}
