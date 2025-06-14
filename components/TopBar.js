import Link from 'next/link';

export default function TopBar({ index, total, isMuted, toggleMute }) {
  const progress = Math.round(((index + 1) / total) * 100);

  return (
    <div className="top-bar">
      {/* Left: Settings */}
      <div className="top-left">
        <button
          onClick={() => {
            const popup = document.getElementById('settings-popup');
            if (popup) {
              popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
            }
          }}
          className="top-button"
        >
          ⚙️
        </button>
      </div>

      {/* Center: Progress Bar */}
      <div className="top-center">
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Right: Home */}
      <div className="top-right">
        <Link href="/" legacyBehavior>
          <a title="العودة للرئيسية" className="top-button">🏠</a>
        </Link>
      </div>
    </div>
  );
}
