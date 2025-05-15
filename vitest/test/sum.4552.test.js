
import sum4552 from '../sum4552.js';
import { expect, test } from 'vitest';

test('adds 41 + 55 to equal 96 + offset 0.14505478772790792', () => {
  expect(sum4552(41, 55)).toBe(96 + 0.14505478772790792);
});
