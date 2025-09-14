import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const createHearts = () => {
      const newHearts: FloatingHeart[] = [];
      for (let i = 0; i < 6; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 50,
          delay: Math.random() * 3,
          size: Math.random() * 10 + 15,
        });
      }
      setHearts(newHearts);
    };

    const timer = setTimeout(createHearts, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-pink-300 opacity-60 floating-heart"
          style={{
            left: heart.x,
            bottom: -50,
            fontSize: heart.size,
            animationDelay: `${heart.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;