/**
 * Safely parses a JSON string with error handling
 * 
 * @param str The JSON string to parse
 * @param fallback The fallback value to return if parsing fails (defaults to empty object)
 * @returns The parsed object or the fallback value
 * 
 * @example
 * // Basic usage
 * const data = safeJsonParse(localStorage.getItem('user-data'));
 * 
 * // With custom fallback
 * const settings = safeJsonParse(localStorage.getItem('settings'), { theme: 'light' });
 */
export function safeJsonParse<T = any>(str: string | null | undefined, fallback: T = {} as T): T {
  if (!str) return fallback;
  try {
    return JSON.parse(str) as T;
  } catch {
    return fallback;
  }
}

/**
 * Safely gets an item from localStorage with JSON parsing
 * 
 * @param key The localStorage key to retrieve
 * @param fallback The fallback value to return if the key doesn't exist or parsing fails
 * @returns The parsed value or the fallback
 * 
 * @example
 * // Basic usage
 * const userData = getLocalStorage('user-data');
 * 
 * // With custom fallback
 * const settings = getLocalStorage('settings', { theme: 'light' });
 */
export function getLocalStorage<T = any>(key: string, fallback: T = {} as T): T {
  if (typeof window === 'undefined') return fallback;
  return safeJsonParse<T>(localStorage.getItem(key), fallback);
}

/**
 * Safely sets an item in localStorage with JSON stringification
 * 
 * @param key The localStorage key to set
 * @param value The value to store
 * @returns true if successful, false if an error occurred
 * 
 * @example
 * // Basic usage
 * setLocalStorage('user-data', { name: 'John', id: 123 });
 */
export function setLocalStorage(key: string, value: any): boolean {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}