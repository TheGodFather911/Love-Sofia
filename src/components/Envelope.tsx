import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { EnvelopeProps } from '../types';

const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onOpen }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Magical sparkles around envelope */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-8 left-12 text-yellow-300 opacity-60 animate-pulse" size={16} />
        <Sparkles className="absolute top-16 right-8 text-pink-300 opacity-40 animate-pulse" size={12} style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-12 left-8 text-purple-300 opacity-50 animate-pulse" size={14} style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute bottom-8 right-16 text-blue-300 opacity-45 animate-pulse" size={10} style={{ animationDelay: '0.5s' }} />
      </div>

      <div
        className={`envelope-container cursor-pointer transition-all duration-1000 ${
          isOpen ? 'scale-110 opacity-90' : 'hover:scale-105 hover:rotate-1'
        }`}
        onClick={onOpen}
      >
        {/* Envelope Shadow Base */}
        <div className="absolute inset-0 bg-black opacity-20 blur-xl transform translate-y-8 scale-95 rounded-lg"></div>
        
        {/* Main Envelope Body */}
        <div className="relative w-96 h-64 bg-gradient-to-br from-amber-50 via-cream-100 to-amber-100 border border-amber-200 shadow-2xl envelope-3d">
          
          {/* Envelope Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-30 rounded-sm"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Decorative Border Pattern */}
          <div className="absolute inset-2 border-2 border-amber-300 opacity-40 rounded-sm border-dashed"></div>
          
          {/* Envelope Back Flap (Bottom Layer) */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded-sm"></div>

          {/* Letter Peek */}
          <div
            className={`absolute top-6 left-6 right-6 bottom-6 bg-gradient-to-br from-white via-cream-50 to-pink-50 shadow-inner transition-all duration-1000 rounded-sm ${
              isOpen ? 'translate-y-[-30px] rotate-2 opacity-100' : 'translate-y-0 opacity-80'
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 40h40V0H0z'/%3E%3Cpath d='M0 20h40' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3Cpath d='M0 30h40' stroke='%23f3f4f6' stroke-width='0.3'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            {!isOpen && (
              <div className="p-6 font-serif text-gray-600 text-sm leading-relaxed">
                <div className="handwriting opacity-70 space-y-2">
                  <div className="text-pink-600 font-semibold">My Dearest Love,</div>
                  <div>There are so many things...</div>
                  <div>I want to tell you...</div>
                  <div>about how beautiful you are...</div>
                  <div className="text-xs opacity-50 mt-4">♡ Click to read more ♡</div>
                </div>
              </div>
            )}
          </div>

          {/* Top Envelope Flap */}
          <div
            className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 border-b border-amber-400 transition-all duration-1500 origin-top envelope-flap-3d ${
              isOpen ? 'envelope-flap-open' : ''
            }`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Flap Inner Shadow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10"></div>
            
            {/* Decorative Flap Pattern */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.3'%3E%3Cpath d='M10 0l10 10-10 10L0 10z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '15px 15px'
              }}
            />
          </div>

          {/* Wax Seal */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              {/* Seal Shadow */}
              <div className="absolute inset-0 bg-red-900 opacity-30 blur-sm transform translate-y-1 scale-110 rounded-full"></div>
              
              {/* Main Seal */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-red-500 via-red-600 to-red-800 rounded-full shadow-2xl seal-3d flex items-center justify-center">
                {/* Seal Texture */}
                <div 
                  className="absolute inset-0 rounded-full opacity-30"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                  }}
                />
                
                {/* Heart in Seal */}
                <Heart className="w-8 h-8 text-red-200 fill-current drop-shadow-lg" />
                
                {/* Seal Highlight */}
                <div className="absolute top-2 left-3 w-3 h-3 bg-red-300 rounded-full opacity-60 blur-sm"></div>
              </div>
              
              {/* Seal Glow Effect */}
              <div className="absolute inset-0 bg-red-400 opacity-20 blur-lg rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Envelope Edges Enhancement */}
          <div className="absolute inset-0 rounded-sm shadow-inner-custom"></div>
          
          {/* Corner Decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-amber-400 opacity-60"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-400 opacity-60"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-amber-400 opacity-60"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-amber-400 opacity-60"></div>
        </div>

        {/* Magical Glow Effect */}
        {!isOpen && (
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 opacity-0 hover:opacity-20 transition-opacity duration-500 rounded-lg blur-xl"></div>
        )}

        {/* Click Instruction */}
        {!isOpen && (
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-gray-600 text-lg font-light animate-bounce handwriting">
              Click to open your letter ♡
            </p>
            <div className="flex justify-center mt-2 space-x-1">
              <div className="w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Envelope;