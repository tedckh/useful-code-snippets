/**
 * Combines multiple class names into a single string, filtering out falsy values
 * 
 * @param args Any number of class names or conditional class expressions
 * @returns A string of combined class names
 * 
 * @example
 * // Basic usage
 * classNames('btn', 'btn-primary');  // 'btn btn-primary'
 * 
 * // With conditional classes
 * classNames('btn', isActive && 'active', isDisabled && 'disabled');  // 'btn active' if isActive is true
 * 
 * // With object syntax
 * classNames('btn', { active: isActive, disabled: isDisabled });
 */
export function classNames(...args: (string | boolean | null | undefined | Record<string, boolean>)[]): string {
  const classes: string[] = [];
  
  args.forEach(arg => {
    if (!arg) return;
    
    if (typeof arg === 'string') {
      classes.push(arg);
    } else if (typeof arg === 'object') {
      Object.entries(arg).forEach(([key, value]) => {
        if (value) classes.push(key);
      });
    }
  });
  
  return classes.join(' ');
}