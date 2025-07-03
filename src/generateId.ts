/**
 * Generates a random ID string
 * 
 * @param length The length of the ID (default: 8)
 * @returns A random ID string
 */
export function generateId(length = 8): string {
  return Math.random().toString(36).substring(2, 2 + length);
}
