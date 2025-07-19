/**
 * Utility function to detect if code is running in a browser environment
 * @returns {boolean} True if running in a browser, false otherwise
 */
export const isBrowser = () => typeof window !== 'undefined';

/**
 * Safely access window object or its properties
 * @param {Function} callback - Function that uses window object
 * @param {*} fallback - Value to return if window is not available
 * @returns {*} Result of callback or fallback value
 */
export const safelyAccessWindow = (callback, fallback = null) => {
  if (!isBrowser()) return fallback;
  try {
    return callback(window);
  } catch (error) {
    console.error('Error accessing window:', error);
    return fallback;
  }
};