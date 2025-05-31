import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('darkmode', dark);
    const popup = document.getElementById('settings-popup');
    if (popup) {
      popup.classList.toggle('darkmode', dark);
    }
  }, [dark]);

  return (
    <main>
      <div className="page-container">
        {children}
      </div>
      <div id="settings-popup">
        <label>
          <input
            type="checkbox"
            onChange={(e) => setDark(e.target.checked)}
          />
          {' '}الوضع الليلي
        </label>
      </div>
    </main>
  );
}

