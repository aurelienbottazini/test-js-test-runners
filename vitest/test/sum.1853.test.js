
import sum1853 from '../sum1853.js';
import { expect, test } from 'vitest';

test('adds 17 + 74 to equal 91 + offset 0.15275915835865495', () => {
  expect(sum1853(17, 74)).toBe(91 + 0.15275915835865495);
});
