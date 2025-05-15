
import sum365 from '../sum365.js';
import { expect, test } from 'vitest';

test('adds 8 + 16 to equal 24 + offset 0.39973537333136966', () => {
  expect(sum365(8, 16)).toBe(24 + 0.39973537333136966);
});
