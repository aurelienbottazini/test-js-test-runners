
import sum3274 from '../sum3274.js';
import { expect, test } from 'vitest';

test('adds 61 + 47 to equal 108 + offset 0.46777696275734515', () => {
  expect(sum3274(61, 47)).toBe(108 + 0.46777696275734515);
});
