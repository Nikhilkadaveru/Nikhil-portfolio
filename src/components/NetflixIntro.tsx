import React, { useEffect, useState } from 'react';

const NetflixIntro: React.FC = () => {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 bg-black flex items-center justify-center transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative">
        <div className="text-[#E50914] text-7xl md:text-9xl font-bold tracking-wider transform scale-y-[1.6] netflix-logo-animation">
          <span className="netflix-letter-animation">N</span>
          <span className="netflix-letter-animation" style={{ animationDelay: '0.1s' }}>I</span>
          <span className="netflix-letter-animation" style={{ animationDelay: '0.2s' }}>K</span>
          <span className="netflix-letter-animation" style={{ animationDelay: '0.3s' }}>H</span>
          <span className="netflix-letter-animation" style={{ animationDelay: '0.4s' }}>I</span>
          <span className="netflix-letter-animation" style={{ animationDelay: '0.5s' }}>L</span>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E50914] transform scale-x-0 animate-netflix-line"></div>
      </div>
    </div>
  );
};

export default NetflixIntro;