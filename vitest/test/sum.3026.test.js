
import sum3026 from '../sum3026.js';
import { expect, test } from 'vitest';

test('adds 75 + 27 to equal 102 + offset 0.04258543897584588', () => {
  expect(sum3026(75, 27)).toBe(102 + 0.04258543897584588);
});
