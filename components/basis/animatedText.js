import React, { useState, useEffect } from 'react';
import localFont from 'next/font/local';

const nohemi = localFont({ src: '../../public/font/Nohemi/Nohemi-Bold.ttf', display: 'swap'});


const AnimatedText = () => {
  const texts = ["Creer pour l'eternite.", "Vivre de sa passion",];
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentText = texts[textIndex];
      
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          setIsDeleting(true);
          setTimeout(() => {}, 2000); // Pause plus longue à la fin de l'écriture
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 100 : 200); // Ralentissement de l'écriture et de l'effacement

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
      <div className="text-7xl font-bold relative max-sm:text-6xl h-[100px] max-lg:h-[170px] max-sm:h-[150px]">
        <span className={`relative ${nohemi.className}`}>
          {displayText}
          <span className="absolute -bottom-1 text-black animate-blink-slow">_</span>
        </span>
      </div>
  );
};

export default AnimatedText;