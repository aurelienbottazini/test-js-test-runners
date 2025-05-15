
import sum3973 from '../sum3973.js';
import { expect, test } from 'vitest';

test('adds 75 + 39 to equal 114 + offset 0.4805451479530082', () => {
  expect(sum3973(75, 39)).toBe(114 + 0.4805451479530082);
});
