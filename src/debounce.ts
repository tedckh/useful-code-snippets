/**
 * Creates a debounced function that delays invoking the provided function
 * until after `delay` milliseconds have elapsed since the last time it was invoked.
 * 
 * @param func The function to debounce
 * @param delay The delay in milliseconds
 * @param immediate If true, trigger the function on the leading edge instead of the trailing edge
 * @returns A debounced version of the function
 * 
 * @example
 * // Basic usage
 * const debouncedSearch = debounce((query) => {
 *   fetchSearchResults(query);
 * }, 500);
 * 
 * // With immediate execution
 * const debouncedSave = debounce((data) => {
 *   saveToDatabase(data);
 * }, 1000, true);
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay = 300,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<T>): void => {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, delay);
    
    if (callNow) func(...args);
  };
}
