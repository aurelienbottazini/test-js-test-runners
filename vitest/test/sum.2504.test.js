
import sum2504 from '../sum2504.js';
import { expect, test } from 'vitest';

test('adds 50 + 2 to equal 52 + offset 0.3704229416177315', () => {
  expect(sum2504(50, 2)).toBe(52 + 0.3704229416177315);
});
