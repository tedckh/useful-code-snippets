# @tedckh/useful-code-snippets

A collection of useful TypeScript utility functions for common development tasks.

## Installation

```bash
npm install @tedckh/useful-code-snippets
# or
yarn add @tedckh/useful-code-snippets
```

## Usage

```typescript
import { 
  debounce, 
  throttle, 
  classNames, 
  formatDate, 
  deepClone, 
  generateId,
  pick,
  omit 
} from '@tedckh/useful-code-snippets';

// Debounce and throttle function calls
const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 500);

const throttledScroll = throttle(() => {
  console.log('Scrolling...');
}, 100);

// Combine CSS class names
const className = classNames('btn', { active: true, disabled: false });
// Result: 'btn active'

// Deep clone objects
const original = { user: { name: 'John', age: 30 } };
const cloned = deepClone(original);

// Generate random IDs
const id = generateId(12); // Random 12-character ID

// Object utilities
const user = { name: 'John', age: 30, email: 'john@example.com' };
const picked = pick(user, ['name', 'email']); // { name: 'John', email: 'john@example.com' }
const omitted = omit(user, ['age']); // { name: 'John', email: 'john@example.com' }
```

## Available Functions

### Function Control
- **`debounce`** - Delay function execution until after specified time
- **`throttle`** - Limit function execution to once per time period

### Object Utilities
- **`deepClone`** - Create deep copies of objects
- **`pick`** - Extract specific properties from objects
- **`omit`** - Remove specific properties from objects
- **`deepMerge`** - Deeply merge two objects
- **`isEmpty`** - Check if object is empty
- **`shapeObject`** - Shape objects to match schemas

### Utilities
- **`classNames`** - Combine CSS class names with conditional logic
- **`formatDate`** - Format dates with locale support
- **`generateId`** - Generate random ID strings
- **`sleep`** - Async delay utility
- **`clipboard`** - Clipboard utilities
- **`download`** - File download helpers
- **`localStorage`** - Local storage utilities

## License

MIT