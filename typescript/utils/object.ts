/**
 * Checks if an object is empty (has no own enumerable properties)
 *
 * @param obj The object to check
 * @returns True if the object is empty, false otherwise
 *
 * @example
 * // Basic usage
 * isEmpty({});  // true
 * isEmpty({ key: 'value' });  // false
 * isEmpty([]);  // false (arrays are not considered empty objects)
 * isEmpty(null);  // false
 */
export function isEmpty(obj: any): boolean {
  return (
    obj !== null &&
    typeof obj === 'object' &&
    Object.keys(obj).length === 0 &&
    obj.constructor === Object
  );
}

/**
 * Picks specified properties from an object
 *
 * @param obj The source object
 * @param keys Array of keys to pick
 * @returns A new object with only the specified keys
 *
 * @example
 * // Basic usage
 * pick({ name: 'John', age: 30, email: 'john@example.com' }, ['name', 'email']);
 * // Returns { name: 'John', email: 'john@example.com' }
 */
export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> {
  return keys.reduce((result, key) => {
    if (obj && key in obj) {
      result[key] = obj[key];
    }
    return result;
  }, {} as Pick<T, K>);
}

/**
 * Omits specified properties from an object
 *
 * @param obj The source object
 * @param keys Array of keys to omit
 * @returns A new object without the specified keys
 *
 * @example
 * // Basic usage
 * omit({ name: 'John', age: 30, email: 'john@example.com' }, ['age']);
 * // Returns { name: 'John', email: 'john@example.com' }
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result as Omit<T, K>;
}

/**
 * Deeply merges two objects
 *
 * @param target The target object
 * @param source The source object
 * @returns A new object with properties from both objects
 *
 * @example
 * // Basic usage
 * deepMerge(
 *   { user: { name: 'John', settings: { theme: 'light' } } },
 *   { user: { age: 30, settings: { notifications: true } } }
 * );
 * // Returns { user: { name: 'John', age: 30, settings: { theme: 'light', notifications: true } } }
 */
export function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const k = key as keyof typeof source;

      if (isObject(source[k])) {
        if (!(k in target)) {
          Object.assign(output, { [k]: source[k] });
        } else {
          output[k] = deepMerge(
            target[k] as object,
            source[k] as object,
          ) as any;
        }
      } else {
        Object.assign(output, { [k]: source[k] });
      }
    });
  }

  return output;
}

/**
 * Shapes an object to match a specific type by only including properties from a schema object
 *
 * @param data The source object with potentially extra properties
 * @param schema An object representing the shape of the desired type
 * @returns A new object with only the properties that exist in the schema
 *
 * @example
 * // Define your schema object with the shape you want
 * const userSchema = {
 *   name: '',
 *   age: 0,
 *   email: ''
 * };
 *
 * // API response with extra fields
 * const apiResponse = {
 *   name: 'John Doe',
 *   age: 30,
 *   email: 'john@example.com',
 *   gender: 'male',
 *   lastLogin: '2023-05-15'
 * };
 *
 * // Shape the response to match the schema
 * const user = shapeObject(apiResponse, userSchema);
 * // Returns { name: 'John Doe', age: 30, email: 'john@example.com' }
 */
export function shapeObject<T extends object>(data: any, schema: T): T {
  if (!data || typeof data !== 'object') {
    return { ...schema };
  }

  return Object.keys(schema).reduce((result, key) => {
    const k = key as keyof T;
    result[k] = data[key] !== undefined ? data[key] : schema[k];
    return result;
  }, {} as T);
}

/**
 * Picks properties from an object based on a type parameter
 *
 * @param data The source object with potentially extra properties
 * @param keys Array of keys to pick (must match properties in type T)
 * @returns A new object with only the specified keys, typed as T
 *
 * @example
 * // Define your type
 * type User = {
 *   name: string;
 *   age: number;
 *   email: string;
 * };
 *
 * // API response with extra fields
 * const apiResponse = {
 *   name: 'John Doe',
 *   age: 30,
 *   email: 'john@example.com',
 *   gender: 'male',
 *   lastLogin: '2023-05-15'
 * };
 *
 * // Pick only the properties defined in the User type
 * const user = pickByType<User>(apiResponse, ['name', 'age', 'email']);
 * // Returns { name: 'John Doe', age: 30, email: 'john@example.com' }
 */
export function pickByType<T>(data: any, keys: Array<keyof T>): T {
  return keys.reduce((result, key) => {
    if (data && key in data) {
      result[key] = data[key];
    }
    return result;
  }, {} as T);
}

/**
 * Helper function to check if a value is an object
 */
function isObject(item: any): item is object {
  return item && typeof item === 'object' && !Array.isArray(item);
}
