
import sum2575 from '../sum2575.js';
import { expect, test } from 'vitest';

test('adds 7 + 15 to equal 22 + offset 0.5145375359640509', () => {
  expect(sum2575(7, 15)).toBe(22 + 0.5145375359640509);
});
