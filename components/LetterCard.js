export default function LetterCard({ letter, word, image, onPrev, onNext, onPlay }) {
  return (
    <div className="center-section">
      <div className="image-display">
        <img src={image} alt={word} />
        <div className="word-display">{word}</div>
      </div>
      <div className="bottom-controls">
        <button onClick={onPrev}>⬅️</button>  {/* Left side: Previous */}
        <button onClick={onPlay}>🔊</button>  {/* Center: Play */}
        <button onClick={onNext}>➡️</button>  {/* Right side: Next */}
    </div>

    </div>
  );
}
