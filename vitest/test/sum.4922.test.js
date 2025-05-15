
import sum4922 from '../sum4922.js';
import { expect, test } from 'vitest';

test('adds 49 + 51 to equal 100 + offset 0.9938225783208936', () => {
  expect(sum4922(49, 51)).toBe(100 + 0.9938225783208936);
});
