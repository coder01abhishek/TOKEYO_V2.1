'use client';

import { useState, useEffect, useCallback } from 'react';
import Loader from './Loader';
import { motion, AnimatePresence } from 'framer-motion';

const LoaderWrapper = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);

  // Only preload critical assets for faster initial load
  const criticalAssets = [
    // Only critical videos for hero section
    '/videos/doll.mp4',
    '/videos/doll2.mp4',
    '/videos/doll3.mp4',

    // Critical images only
    '/assets/images/iPhone14Pro.svg',
    '/assets/images/cursor.png',
  ];

  const totalAssets = criticalAssets.length + 1; // +1 for fonts

  const updateProgress = useCallback(() => {
    const newProgress = Math.round((loadedCount / totalAssets) * 100);
    setProgress(newProgress);
  }, [loadedCount, totalAssets]);

  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = (src);
      img.loading = 'eager';
      img.onload = () => {
        setLoadedCount(prev => prev + 1);
        resolve();
      };
      img.onerror = () => {
        setLoadedCount(prev => prev + 1);
        resolve();
      };
    });
  };

  const preloadVideo = (src: string): Promise<void> => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.src = (src);
      video.oncanplaythrough = () => {
        setLoadedCount(prev => prev + 1);
        resolve();
      };
      video.onerror = () => {
        setLoadedCount(prev => prev + 1);
        resolve();
      };
    });
  };

  useEffect(() => {
    updateProgress();
  }, [loadedCount, updateProgress]);

  useEffect(() => {
    let isMounted = true;
    let allLoaded = false;

    const preloadResources = async () => {
      // Preload images
      const imagePromises = criticalAssets
        .filter(asset => !asset.includes('.mp4'))
        .map(preloadImage);

      // Preload videos
      const videoPromises = criticalAssets
        .filter(asset => asset.includes('.mp4'))
        .map(preloadVideo);

      // Preload fonts
      const fontPromise = document.fonts.ready.then(() => {
        setLoadedCount(prev => prev + 1);
      });

      // Wait for all assets to load
      await Promise.allSettled([...imagePromises, ...videoPromises, fontPromise]);

      allLoaded = true;

      // Shorter minimum loading time for better UX
      setTimeout(() => {
        if (isMounted) {
          setLoading(false);
        }
      }, 800);
    };

    // Start preloading
    preloadResources();

    return () => {
      isMounted = false;
    };
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "easeInOut" as const,
    duration: 0.3
  };

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <Loader progress={progress} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderWrapper;
