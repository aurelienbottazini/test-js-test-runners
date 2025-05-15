
import sum2199 from '../sum2199.js';
import { expect, test } from 'vitest';

test('adds 27 + 74 to equal 101 + offset 0.6515903903646093', () => {
  expect(sum2199(27, 74)).toBe(101 + 0.6515903903646093);
});
