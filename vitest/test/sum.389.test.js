
import sum389 from '../sum389.js';
import { expect, test } from 'vitest';

test('adds 80 + 47 to equal 127 + offset 0.9284211824620984', () => {
  expect(sum389(80, 47)).toBe(127 + 0.9284211824620984);
});
