import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import TopBar from '../components/TopBar';
import LetterCard from '../components/LetterCard';

const letters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z'
];

const words = [
  'Appel', 'Boom', 'Computer', 'Deur', 'Eend', 'Fiets', 'Groente',
  'Huis', 'IJs', 'Jas', 'Kat', 'Lamp', 'Maan', 'Neus', 'Oog',
  'Pen', 'Quiz', 'Regen', 'Slang', 'Tafel', 'Ui', 'Vis',
  'Water', 'Xylofoon', 'Yoghurt', 'Zon'
];


export default function Alphabet() {
  const [index, setIndex] = useState(0);
  const [isMuted, setMuted] = useState(false);

  const currentLetter = letters[index];
  const currentWord = words[index];

  useEffect(() => {
  if (!isMuted) {
    const letterAudio = new Audio(`/sounds/${currentLetter}.mp3`);
    const wordAudio = new Audio(`/sounds/${currentWord.toLowerCase()}.mp3`);

    letterAudio.play();

    letterAudio.onended = () => {
      setTimeout(() => {
        wordAudio.play();
      }, 1000); // 1 second delay
    };
  }
}, [index]);


  return (
    <Layout>
      <TopBar
        index={index}
        total={letters.length}
        isMuted={isMuted}
        toggleMute={() => setMuted(!isMuted)}
        />
      <LetterCard
  letter={`${Math.round(((index + 1) / letters.length) * 100)}%`}
  word={currentWord}
  image={`/images/${currentWord.toLowerCase()}.png`}
  onPrev={() => index > 0 && setIndex(index - 1)}
  onNext={() => index < letters.length - 1 && setIndex(index + 1)}
  onPlay={() => {
    if (!isMuted) {
      const letterAudio = new Audio(`/sounds/${currentLetter}.mp3`);
      const wordAudio = new Audio(`/sounds/${currentWord.toLowerCase()}.mp3`);

      letterAudio.play();

      letterAudio.onended = () => {
        setTimeout(() => {
          wordAudio.play();
        }, 1000); // 1 second delay
      };
    }
  }}
/>


    </Layout>
  );
}
