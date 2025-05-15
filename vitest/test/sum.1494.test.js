
import sum1494 from '../sum1494.js';
import { expect, test } from 'vitest';

test('adds 7 + 29 to equal 36 + offset 0.1546331045458087', () => {
  expect(sum1494(7, 29)).toBe(36 + 0.1546331045458087);
});
