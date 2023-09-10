import React, { useState, useEffect } from 'react';

const images = [
  'https://source.unsplash.com/random/1024x720?food',
  'https://source.unsplash.com/random/1024x720?food=1',
  'https://source.unsplash.com/random/1024x720?food=2',
  'https://source.unsplash.com/random/1024x720?food=3',
  'https://source.unsplash.com/random/1024x720?food=4',
  'https://source.unsplash.com/random/1024x720?food=5',
  'https://source.unsplash.com/random/1024x720?food=6',
];

// Function for changing carousel picture
const AutoCarousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, Number(props.changeTime)); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full lg:w-full carousel lg:max-w-7xl rounded-xl">
      {images.map((src, index) => (
        <div
          key={index}
          className={`carousel-item w-full ${
            index === currentIndex ? '' : 'hidden'
          }`}
        >
          <img src={src} className="w-full" alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default AutoCarousel;
