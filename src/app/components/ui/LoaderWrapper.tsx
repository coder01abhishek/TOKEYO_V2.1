'use client';

import { useState, useEffect, useCallback } from 'react';
import Loader from './Loader';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderWrapperProps {
  children: React.ReactNode;
}

const LoaderWrapper = ({ children }: LoaderWrapperProps) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Minimal critical assets - only what's visible immediately
  const criticalAssets = [
    '/videos/doll.mp4', // Only the first video
  ];

  const updateProgress = useCallback((loaded: number, total: number) => {
    const newProgress = Math.round((loaded / total) * 100);
    setProgress(newProgress);
  }, []);

  // Ultra-fast image preload with timeout
  const preloadImage = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      const timeout = setTimeout(() => {
        resolve(false); // Timeout after 1.5 seconds
      }, 1500);

      img.src = src;
      img.loading = 'eager';
      img.onload = () => {
        clearTimeout(timeout);
        resolve(true);
      };
      img.onerror = () => {
        clearTimeout(timeout);
        resolve(false);
      };
    });
  };

  // Much faster video preload - only metadata
  const preloadVideo = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      const timeout = setTimeout(() => {
        resolve(false); // Timeout after 2 seconds
      }, 2000);

      video.preload = 'metadata'; // CRITICAL: Only metadata, not full video
      video.src = src;
      
      video.onloadedmetadata = () => {
        clearTimeout(timeout);
        resolve(true);
      };
      video.onerror = () => {
        clearTimeout(timeout);
        resolve(false);
      };
    });
  };

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const loadCriticalAssets = async () => {
      if (!isMounted) return;

      let loadedAssets = 0;
      const totalToLoad = criticalAssets.length + 1; // +1 for fonts

      // Update progress immediately
      updateProgress(loadedAssets, totalToLoad);

      try {
        // 1. Load fonts first (non-blocking)
        const fontLoad = document.fonts.ready.then(() => {
          if (isMounted) {
            loadedAssets++;
            updateProgress(loadedAssets, totalToLoad);
          }
        });

        // 2. Load critical assets in parallel with timeouts
        const assetPromises = criticalAssets.map(async (asset) => {
          const success = asset.includes('.mp4') 
            ? await preloadVideo(asset)
            : await preloadImage(asset);
          
          if (isMounted && success) {
            loadedAssets++;
            updateProgress(loadedAssets, totalToLoad);
          }
          return success;
        });

        // 3. Wait for fonts OR timeout (whichever comes first)
        await Promise.race([
          fontLoad,
          new Promise(resolve => setTimeout(resolve, 1000))
        ]);

        // 4. Wait for critical assets with short timeout
        await Promise.race([
          Promise.allSettled(assetPromises),
          new Promise(resolve => setTimeout(resolve, 2000))
        ]);

      } catch (error) {
        console.log('Loading completed with optional assets');
      }

      // 5. Hide loader quickly - don't wait for everything
      if (isMounted) {
        timeoutId = setTimeout(() => {
          setLoading(false);
        }, 300); // Very short minimum time
      }
    };

    loadCriticalAssets();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [updateProgress]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} // Faster transition
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <Loader progress={progress} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Content visible immediately after loading */}
      <div style={{ 
        opacity: loading ? 0 : 1,
        transition: 'opacity 0.2s ease-in-out'
      }}>
        {children}
      </div>
    </>
  );
};

export default LoaderWrapper;