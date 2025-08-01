import React, { useEffect, useState, useRef } from 'react';

const CyberpunkSpeech = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    if (!text) {
      setDisplayedText('');
      return;
    }

    setDisplayedText('');
    indexRef.current = 0;

    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText(prev => prev + text.charAt(indexRef.current));
        indexRef.current++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="cyberpunk-speech">
      {displayedText && <span className="typed-text">{displayedText}</span>}
    </div>
  );
};

export default CyberpunkSpeech;