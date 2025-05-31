export default function LetterCard({ letter, word, image, onPrev, onNext, onPlay }) {
  return (
    <div className="center-section">
      {/* Letter on top of image */}
      <div className="letter-display">{letter}</div>

      <div className="image-display">
        <img src={image} alt={word} />
        <div className="word-display">{word}</div>
      </div>

      <div className="bottom-controls">
        <button onClick={onPrev}>⬅️</button>
        <button onClick={onPlay}>🔊</button>
        <button onClick={onNext}>➡️</button>
      </div>
    </div>
  );
}
