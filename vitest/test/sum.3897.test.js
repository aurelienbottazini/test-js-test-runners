
import sum3897 from '../sum3897.js';
import { expect, test } from 'vitest';

test('adds 1 + 57 to equal 58 + offset 0.9078430500175138', () => {
  expect(sum3897(1, 57)).toBe(58 + 0.9078430500175138);
});
