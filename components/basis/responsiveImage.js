import Image from 'next/image';
import { useState, useEffect } from 'react';

const generateImageSizes = (baseWidth, baseHeight) => {
  const sizes = [0.25, 0.5, 1, 1.5, 2];
  return sizes.map(scale => ({
    width: Math.round(baseWidth * scale),
    height: Math.round(baseHeight * scale)
  }));
};

export default function ResponsiveImage({ src, alt, baseWidth = 1858, baseHeight = 900, className }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const imageSizes = generateImageSizes(baseWidth, baseHeight);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getOptimalImageSize = () => {
    const devicePixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const optimalWidth = windowWidth * devicePixelRatio;
    return imageSizes.find(size => size.width >= optimalWidth) || imageSizes[imageSizes.length - 1];
  };

  const { width, height } = getOptimalImageSize();

  return (
    <picture>
      {imageSizes.map((size, index) => (
        <source
          key={index}
          media={`(min-width: ${size.width}px)`}
          srcSet={`${src}?w=${size.width}&h=${size.height} ${size.width}w`}
        />
      ))}
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={className}
        sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`}
        loading="lazy"
      />
    </picture>
  );
}