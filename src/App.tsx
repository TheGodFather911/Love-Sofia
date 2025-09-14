import React, { useState } from 'react';
import Envelope from './components/Envelope';
import Letter from './components/Letter';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isLetterVisible, setIsLetterVisible] = useState(false);

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
    setTimeout(() => {
      setIsLetterVisible(true);
    }, 1000);
  };

  const handleLetterClose = () => {
    setIsLetterVisible(false);
    setTimeout(() => {
      setIsEnvelopeOpen(false);
    }, 300);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-cream-50 to-amber-50">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-18 2c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-33-2c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 shadow-inner-xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center p-8">
        {!isLetterVisible && (
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light text-gray-700 mb-16 handwriting-title animate-fade-in">
              A Letter Just For You
            </h1>
            <div className="mb-8">
              <p className="text-xl text-gray-600 handwriting opacity-80 animate-fade-in-delay">
                Something special awaits inside...
              </p>
            </div>
            <Envelope isOpen={isEnvelopeOpen} onOpen={handleEnvelopeOpen} />
          </div>
        )}
      </div>

      {/* Letter component */}
      <Letter isVisible={isLetterVisible} onClose={handleLetterClose} />

      {/* Floating hearts */}
      {isLetterVisible && <FloatingHearts />}
    </div>
  );
}

export default App;