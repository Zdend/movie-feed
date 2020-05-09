import { useEffect, useState } from 'react';

export const useImage = (src?: string) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!src) {
      return;
    }
    const image = new Image();
    image.src = src;
    image.onload = () => {
      if (image.complete) {
        setImageLoaded(true);
      }
    };
    return () => {
      image.onload = null;
    }
  }, [src]);

  return [
    imageLoaded,
    src,
  ]
}