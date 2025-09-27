'use client';

import { useState, useEffect } from 'react';
import Loader from './Loader';
import { motion, AnimatePresence } from 'framer-motion';

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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
      const totalAssets = criticalAssets.length + 1; 

      const updateProgress = () => {
        const newProgress = Math.round((loadedCount / totalAssets) * 100);
        setProgress(newProgress);
      };

      try {
        await document.fonts.ready;
        loadedCount++;
        updateProgress();

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

        await Promise.race([
          Promise.allSettled([...imagePromises, ...videoPromises]),
          new Promise(resolve => setTimeout(resolve, 3000)) 
        ]);
        
        setTimeout(() => {
          setLoading(false);
        }, 300); 

      } catch (error) {
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