
import sum1725 from '../sum1725.js';
import { expect, test } from 'vitest';

test('adds 69 + 77 to equal 146 + offset 0.8593133304549234', () => {
  expect(sum1725(69, 77)).toBe(146 + 0.8593133304549234);
});
