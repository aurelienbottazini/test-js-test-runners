
import sum2276 from '../sum2276.js';
import { expect, test } from 'vitest';

test('adds 34 + 76 to equal 110 + offset 0.7555395802234296', () => {
  expect(sum2276(34, 76)).toBe(110 + 0.7555395802234296);
});
