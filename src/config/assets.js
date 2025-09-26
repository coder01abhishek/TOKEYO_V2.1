/**
 * Asset URL Configuration
 * Manages URLs for media assets (local vs blob storage)
 */

// Environment flag to use blob storage URLs
const USE_BLOB_STORAGE = process.env.NODE_ENV === 'production' || process.env.USE_BLOB_STORAGE === 'true';

// Blob storage URLs (populated from Vercel blob storage)
const BLOB_URLS = {
  // Critical videos (preloaded)
  '/videos/doll.mp4': 'https://4b7mwyeirrypbewg.public.blob.vercel-storage.com/videos/doll.mp4',
  '/videos/doll2.mp4': 'https://4b7mwyeirrypbewg.public.blob.vercel-storage.com/videos/doll2.mp4',
  '/videos/doll3.mp4': 'https://4b7mwyeirrypbewg.public.blob.vercel-storage.com/videos/doll3.mp4',
  
  // Secondary videos
  '/videos/AICharactor.mp4': 'https://4b7mwyeirrypbewg.public.blob.vercel-storage.com/videos/AICharactor.mp4',
  '/videos/step3.mp4': 'https://4b7mwyeirrypbewg.public.blob.vercel-storage.com/videos/step3.mp4',
  
  // Large GIF
  '/videos/doll.gif': 'https://4b7mwyeirrypbewg.public.blob.vercel-storage.com/videos/doll.gif',
  
  // Loader GIF
  '/assets/gifs/loader.gif': 'https://4b7mwyeirrypbewg.public.blob.vercel-storage.com/gifs/loader.gif',
};

/**
 * Get the appropriate URL for an asset
 * @param {string} localPath - The local path (e.g., '/videos/doll.mp4')
 * @returns {string} - Either blob URL or local path
 */
export function getAssetUrl(localPath) {
  if (USE_BLOB_STORAGE && BLOB_URLS[localPath]) {
    return BLOB_URLS[localPath];
  }
  return localPath;
}

/**
 * Update blob URLs after upload
 * @param {Object} urlMapping - Mapping of local paths to blob URLs
 */
export function updateBlobUrls(urlMapping) {
  Object.assign(BLOB_URLS, urlMapping);
}

// Export the configuration
export { USE_BLOB_STORAGE, BLOB_URLS };
