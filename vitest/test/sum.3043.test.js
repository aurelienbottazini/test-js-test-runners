
import sum3043 from '../sum3043.js';
import { expect, test } from 'vitest';

test('adds 29 + 27 to equal 56 + offset 0.3885076560722176', () => {
  expect(sum3043(29, 27)).toBe(56 + 0.3885076560722176);
});
