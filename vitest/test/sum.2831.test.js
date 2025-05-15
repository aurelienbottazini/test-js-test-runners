
import sum2831 from '../sum2831.js';
import { expect, test } from 'vitest';

test('adds 23 + 35 to equal 58 + offset 0.9257996729819501', () => {
  expect(sum2831(23, 35)).toBe(58 + 0.9257996729819501);
});
