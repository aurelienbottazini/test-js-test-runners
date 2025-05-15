
import sum3987 from '../sum3987.js';
import { expect, test } from 'vitest';

test('adds 96 + 47 to equal 143 + offset 0.8576662955456956', () => {
  expect(sum3987(96, 47)).toBe(143 + 0.8576662955456956);
});
