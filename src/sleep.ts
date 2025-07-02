/**
 * Creates a promise that resolves after the specified time
 * 
 * @param ms Time to sleep in milliseconds
 * @returns A promise that resolves after the specified time
 * 
 * @example
 * // Basic usage
 * async function example() {
 *   console.log('Start');
 *   await sleep(1000); // Wait for 1 second
 *   console.log('End after 1 second');
 * }
 * 
 * // With try/catch
 * async function fetchWithRetry() {
 *   try {
 *     const response = await fetch('/api/data');
 *     return await response.json();
 *   } catch (error) {
 *     console.log('Retrying in 2 seconds...');
 *     await sleep(2000);
 *     return fetchWithRetry();
 *   }
 * }
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}