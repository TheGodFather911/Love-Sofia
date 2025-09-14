import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { LetterProps, LetterSection } from '../types';
import TypewriterText from './TypewriterText';

const Letter: React.FC<LetterProps> = ({ isVisible, onClose }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Initialize audio when component mounts
  useEffect(() => {
    const audioElement = new Audio();
    audioElement.src = '/music.mp3';
    audioElement.loop = true;
    audioElement.volume = 0.3;
    setAudio(audioElement);

    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
    };
  }, []);

  // Play audio when letter becomes visible
  useEffect(() => {
    if (isVisible && audio) {
      audio.play().catch(error => {
        console.log('Audio playback failed:', error);
      });
    } else if (!isVisible && audio) {
      audio.pause();
    }
  }, [isVisible, audio]);

  const letterSections: LetterSection[] = [
    {
      title: "My Dearest Love,",
      content: [
        "As I write these words, my heart overflows with all the things I see in you that take my breath away every single day.",
        "Your eyes... they hold entire universes of kindness, sparkling with a light that makes even the darkest moments feel bright again.",
        "The way you smile - it's not just beautiful, it's healing. It reaches into the deepest parts of my soul and reminds me that joy still exists in this world.",
        "Your laugh is music I never want to stop hearing, and the gentle way you move through life shows me what grace truly looks like."
      ],
      delay: 500
    },
    {
      title: "Thank You for Being You",
      content: [
        "Thank you for your patience with me, for loving me even when I'm lost in my own thoughts or struggling with my own heart.",
        "Thank you for seeing something worth loving in me, for believing in us when I sometimes forget how to believe in myself.",
        "Thank you for every gentle touch, every understanding look, every moment you've chosen to stay by my side.",
        "You've given me a love I never knew I deserved, and I am grateful for you every single day."
      ],
      delay: 300
    },
    {
      title: "I Need You to Know...",
      content: [
        "I need to be honest with you about something that weighs on my heart, because you deserve my complete truth.",
        "There's someone from my past - Wiam - who still holds a place in my heart. Not as a rival to what we have, but as a memory I can't let go of.",
        "I miss the friendship we had, the conversations, the shared memories that shaped who I became. Sometimes I long for that connection again.",
        "This doesn't diminish what you mean to me - it's simply a part of my story that I need you to understand."
      ],
      delay: 400
    },
    {
      title: "But You... You Are Everything",
      content: [
        "You are not a replacement. You are not a second choice. You are not living in anyone's shadow.",
        "You are the person who chose to love me as I am, with all my history, all my complexities, all my imperfections.",
        "What we have is real, it's ours, and it's beautiful in ways I never imagined love could be.",
        "You matter to me more than words can express. You are my present, my hope, my choice every single day.",
        "I love you - completely, honestly, and with all the parts of my heart that are capable of love."
      ],
      delay: 300
    }
  ];

  useEffect(() => {
    if (isVisible) {
      setCurrentSection(0);
      setCurrentParagraph(0);
      const timer = setTimeout(() => setShowCloseButton(true), 25000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, audio]);

  const handleParagraphComplete = () => {
    const currentSectionData = letterSections[currentSection];
    
    if (currentParagraph < currentSectionData.content.length - 1) {
      // Move to next paragraph in current section
      setTimeout(() => {
        setCurrentParagraph(currentParagraph + 1);
      }, 800);
    } else if (currentSection < letterSections.length - 1) {
      // Move to next section
      setTimeout(() => {
        setCurrentSection(currentSection + 1);
        setCurrentParagraph(0);
      }, 2000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 letter-overlay">
      <div className="relative max-w-2xl mx-4 bg-gradient-to-br from-cream-50 to-white p-8 md:p-12 shadow-2xl letter-paper transform transition-all duration-1000">
        {/* Paper texture and lines */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #e5e7eb 1px, transparent 1px),
              linear-gradient(#f3f4f6 1px, transparent 1px),
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            `,
            backgroundSize: '25px 25px, 25px 25px, 60px 60px'
          }}
        />
        
        {/* Close button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-300 opacity-70 hover:opacity-100"
          >
            <X size={20} className="text-gray-600" />
          </button>
        )}

        {/* Letter content */}
        <div className="relative z-10 space-y-8">
          {letterSections.slice(0, currentSection + 1).map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 handwriting-title">
                {section.title}
              </h2>
              
              <div className="space-y-4">
                {section.content.slice(0, index === currentSection ? currentParagraph + 1 : section.content.length).map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-xl md:text-2xl leading-relaxed text-gray-700 handwriting">
                    {index === currentSection && pIndex === currentParagraph ? (
                      <TypewriterText
                        text={paragraph}
                        speed={40}
                        delay={section.delay || 0}
                        onComplete={handleParagraphComplete}
                      />
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Signature */}
        {currentSection === letterSections.length - 1 && currentParagraph === letterSections[currentSection].content.length - 1 && (
          <div className="mt-12 text-right">
            <TypewriterText
              text="Forever yours, ♡"
              speed={100}
              delay={3000}
              className="text-2xl md:text-3xl handwriting-signature text-gray-600"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Letter;