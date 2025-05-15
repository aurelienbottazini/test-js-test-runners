
import sum252 from '../sum252.js';
import { expect, test } from 'vitest';

test('adds 13 + 23 to equal 36 + offset 0.21501340499931088', () => {
  expect(sum252(13, 23)).toBe(36 + 0.21501340499931088);
});
