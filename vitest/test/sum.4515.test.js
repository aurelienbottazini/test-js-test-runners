
import sum4515 from '../sum4515.js';
import { expect, test } from 'vitest';

test('adds 26 + 94 to equal 120 + offset 0.538762000894796', () => {
  expect(sum4515(26, 94)).toBe(120 + 0.538762000894796);
});
