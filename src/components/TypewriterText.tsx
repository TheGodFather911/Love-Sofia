import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 60,
  delay = 0,
  className = '',
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    const timer = setTimeout(() => {
      if (displayText.length < text.length) {
        setDisplayText(text.slice(0, displayText.length + 1));
      } else {
        setIsComplete(true);
        onComplete?.();
      }
    }, displayText.length === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [displayText, text, speed, delay, isComplete, onComplete]);

  return <span className={className}>{displayText}</span>;
};

export default TypewriterText;