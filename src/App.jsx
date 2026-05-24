import React, { useState } from 'react';
import './App.css';
import FloatingDecor from './components/FloatingDecor';
import OpeningScreen from './components/OpeningScreen';
import CakeScreen from './components/CakeScreen';
import VideoMessageScreen from './components/VideoMessageScreen';
import FinalScreen from './components/FinalScreen';

export default function App() {
  const [screenIndex, setScreenIndex] = useState(0);

  const goToNextScreen = () => {
    setScreenIndex((prev) => Math.min(prev + 1, 3));
  };

  return (
    <div className="app-container">
      {/* Decorative ambient mobile device mock-up frame for desktop viewports */}
      <div className="mobile-frame">
        
        {/* Floating background sparkles, glowing light blobs and hearts */}
        <FloatingDecor />

        {/* Cinematic Sliding Screen Container */}
        <div 
          className="screen-slide-container"
          style={{
            transform: `translateX(-${screenIndex * 25}%)`
          }}
        >
          {/* SCREEN 1: Opening Photo & Message */}
          <div className="screen-slide-panel">
            <OpeningScreen 
              isActive={screenIndex === 0} 
              onNext={goToNextScreen} 
            />
          </div>

          {/* SCREEN 2: Interactive Birthday Cake Candle Blow */}
          <div className="screen-slide-panel">
            <CakeScreen 
              isActive={screenIndex === 1} 
              onNext={goToNextScreen} 
            />
          </div>

          {/* SCREEN 3: Video & Warm Birthday Note */}
          <div className="screen-slide-panel">
            <VideoMessageScreen 
              isActive={screenIndex === 2} 
              onNext={goToNextScreen} 
            />
          </div>

          {/* SCREEN 4: Final Video reveal & Custom Music Player */}
          <div className="screen-slide-panel">
            <FinalScreen 
              isActive={screenIndex === 3} 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
