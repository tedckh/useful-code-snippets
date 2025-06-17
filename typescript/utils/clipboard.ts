/**
 * Copies text to the clipboard
 * 
 * @param text The text to copy to clipboard
 * @returns A promise that resolves to true if copy was successful, false otherwise
 * 
 * @example
 * // Basic usage
 * const copied = await copyToClipboard('Text to copy');
 * if (copied) {
 *   showSuccessMessage('Copied to clipboard!');
 * }
 * 
 * // With error handling
 * try {
 *   await copyToClipboard('Text to copy');
 *   showSuccessMessage('Copied to clipboard!');
 * } catch {
 *   showErrorMessage('Failed to copy');
 * }
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (!navigator?.clipboard) {
      return fallbackCopyToClipboard(text);
    }
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Copy failed:", err);
    return fallbackCopyToClipboard(text);
  }
}

/**
 * Fallback method for copying text to clipboard using document.execCommand
 * Used when Clipboard API is not available
 */
function fallbackCopyToClipboard(text: string): boolean {
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    const success = document.execCommand('copy');
    document.body.removeChild(textArea);
    return success;
  } catch (err) {
    console.error("Fallback copy failed:", err);
    return false;
  }
}