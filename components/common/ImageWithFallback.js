import { useState } from 'react';
import Image from 'next/image';

/**
 * A wrapper around Next.js Image component that provides fallback support
 * when the primary image fails to load.
 * 
 * @param {string} src - Primary image source URL
 * @param {string} fallbackSrc - Fallback image source URL
 * @param {Object} props - Other props to pass to the Image component
 */
export default function ImageWithFallback({ 
  src, 
  fallbackSrc = '/images/placeholder.jpg',
  alt = 'Image',
  ...props 
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        onLoadingComplete={() => setImgLoaded(true)}
        onError={() => {
          setError(true);
          setImgSrc(fallbackSrc);
        }}
      />
      
      {/* Show a loading indicator until image is loaded */}
      {!imgLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-light/50">
          <div className="w-8 h-8 border-4 border-neutral border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
}
