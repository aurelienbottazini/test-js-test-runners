
import sum2373 from '../sum2373.js';
import { expect, test } from 'vitest';

test('adds 37 + 11 to equal 48 + offset 0.3053095576201452', () => {
  expect(sum2373(37, 11)).toBe(48 + 0.3053095576201452);
});
