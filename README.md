# @tedckh/useful-code-snippets

A collection of useful TypeScript utility functions for common development tasks.

## Installation

```bash
npm install @tedckh/useful-code-snippets
```

## Usage

```typescript
import { debounce, classNames, formatDate } from '@tedckh/useful-code-snippets';

// Debounce function calls
const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 500);

// Combine CSS class names
const className = classNames('btn', { active: true, disabled: false });
// Result: 'btn active'

// Format dates
const formatted = formatDate('2025-01-01', 'en-US');
// Result: 'Jan 1, 2025'
```

## Available Functions

- **`classNames`** - Combine CSS class names with conditional logic
- **`debounce`** - Delay function execution until after specified time
- **`formatDate`** - Format dates with locale support
- **`clipboard`** - Clipboard utilities
- **`download`** - File download helpers
- **`localStorage`** - Local storage utilities
- **`object`** - Object manipulation helpers
- **`sleep`** - Async delay utility

## License

MIT
