const imageCache = new Map<string, HTMLImageElement>();
const loadingPromises = new Map<string, Promise<HTMLImageElement>>();

export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  // Check if already cached
  if (imageCache.has(src)) {
    return Promise.resolve(imageCache.get(src)!);
  }

  // Check if already loading
  if (loadingPromises.has(src)) {
    return loadingPromises.get(src)!;
  }

  // Start loading
  const promise = new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      imageCache.set(src, img);
      loadingPromises.delete(src);
      resolve(img);
    };
    
    img.onerror = () => {
      loadingPromises.delete(src);
      reject(new Error(`Failed to load image: ${src}`));
    };
    
    img.src = src;
  });

  loadingPromises.set(src, promise);
  return promise;
};

export const preloadImages = (sources: string[]): Promise<HTMLImageElement[]> => {
  return Promise.all(sources.map(preloadImage));
};

export const isImageCached = (src: string): boolean => {
  return imageCache.has(src);
};

export const clearImageCache = (): void => {
  imageCache.clear();
  loadingPromises.clear();
};