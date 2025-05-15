
import sum2234 from '../sum2234.js';
import { expect, test } from 'vitest';

test('adds 52 + 47 to equal 99 + offset 0.9567632724909567', () => {
  expect(sum2234(52, 47)).toBe(99 + 0.9567632724909567);
});
