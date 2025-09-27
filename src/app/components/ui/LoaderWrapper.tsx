'use client';

import { useState, useEffect } from 'react';
import Loader from './Loader';
import { motion, AnimatePresence } from 'framer-motion';

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Define critical assets that MUST load before showing content
  const criticalAssets = [
    '/videos/doll.mp4',
    '/videos/doll2.mp4', 
    '/videos/doll3.mp4',
    '/videos/Aiagent.mp4',
    '/assets/images/iPhone14Pro.svg',
    '/assets/images/bg-inte.webp'
  ];

  useEffect(() => {
    const loadAssets = async () => {
      let loadedCount = 0;
      const totalAssets = criticalAssets.length + 1; // +1 for fonts

      const updateProgress = () => {
        const newProgress = Math.round((loadedCount / totalAssets) * 100);
        setProgress(newProgress);
      };

      try {
        // 1. Load fonts (most important)
        await document.fonts.ready;
        loadedCount++;
        updateProgress();

        // 2. Preload critical images
        const imagePromises = criticalAssets
          .filter(asset => !asset.includes('.mp4'))
          .map(src => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = () => {
                loadedCount++;
                updateProgress();
                resolve(true);
              };
              img.onerror = () => {
                loadedCount++;
                updateProgress();
                resolve(false);
              };
            });
          });

        // 3. Preload critical videos (metadata only for speed)
        const videoPromises = criticalAssets
          .filter(asset => asset.includes('.mp4'))
          .map(src => {
            return new Promise((resolve) => {
              const video = document.createElement('video');
              video.preload = 'metadata';
              video.src = src;
              video.onloadedmetadata = () => {
                loadedCount++;
                updateProgress();
                resolve(true);
              };
              video.onerror = () => {
                loadedCount++;
                updateProgress();
                resolve(false);
              };
              // Force metadata load
              video.currentTime = 0.1;
            });
          });

        // Wait for all assets with timeout
        await Promise.race([
          Promise.allSettled([...imagePromises, ...videoPromises]),
          new Promise(resolve => setTimeout(resolve, 3000)) // Max 3 seconds wait
        ]);

        // Ensure minimum loading time for better UX (1.5 seconds min)
        const minLoadTime = 1500;
        const elapsedTime = 0; // You'd need to track actual time
        
        setTimeout(() => {
          setLoading(false);
        }, 300); // Short exit animation

      } catch (error) {
        // Fallback: hide after 2.5 seconds max
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      }
    };

    loadAssets();
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          >
            <Loader progress={progress} />
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className={loading ? 'opacity-70' : 'opacity-100'}>
        {children}
      </div>
    </>
  );
};

export default LoaderWrapper;