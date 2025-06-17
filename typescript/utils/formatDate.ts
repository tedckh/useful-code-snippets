/**
 * Formats a date string into a localized date representation
 *
 * @param dateStr The date string or Date object to format
 * @param locale The locale to use for formatting (defaults to 'zh-HK')
 * @returns A formatted date string
 *
 * @example
 * // Basic usage
 * formatDate('2025-01-01');  // '2025年1月1日' (in zh-HK locale)
 *
 * // With custom locale
 * formatDate('2025-01-01', 'en-US');  // 'Jan 1, 2025' (in English locale)
 */
export function formatDate(dateStr: string | Date, locale = 'zh-HK'): string {
  return new Date(dateStr).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
