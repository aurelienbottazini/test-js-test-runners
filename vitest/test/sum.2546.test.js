
import sum2546 from '../sum2546.js';
import { expect, test } from 'vitest';

test('adds 71 + 47 to equal 118 + offset 0.8470923996984921', () => {
  expect(sum2546(71, 47)).toBe(118 + 0.8470923996984921);
});
