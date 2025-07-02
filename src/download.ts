/**
 * Triggers a file download from a URL
 * 
 * @param url The URL of the file to download
 * @param filename The name to save the file as
 * 
 * @example
 * // Basic usage
 * downloadFile('https://example.com/report.pdf', 'annual-report.pdf');
 * 
 * // With dynamic URL
 * const fileUrl = URL.createObjectURL(blob);
 * downloadFile(fileUrl, 'generated-file.txt');
 * URL.revokeObjectURL(fileUrl); // Clean up
 */
export function downloadFile(url: string, filename: string): void {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = 'none'; 
  
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * Downloads a Blob or File object as a file
 * 
 * @param data The Blob or File object to download
 * @param filename The name to save the file as
 * @param mimeType Optional MIME type for the file (defaults to the Blob's type or 'application/octet-stream')
 * 
 * @example
 * // Download a Blob
 * const jsonBlob = new Blob([JSON.stringify({ data: 'example' })], { type: 'application/json' });
 * downloadBlob(jsonBlob, 'data.json');
 * 
 * // Download text as a file
 * const textBlob = new Blob(['Hello, world!'], { type: 'text/plain' });
 * downloadBlob(textBlob, 'hello.txt');
 */
export function downloadBlob(data: Blob | File, filename: string, mimeType?: string): void {
  const blob = new Blob([data], { type: mimeType || data.type || 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  
  downloadFile(url, filename);
  
  setTimeout(() => URL.revokeObjectURL(url), 100);
}