
import sum1458 from '../sum1458.js';
import { expect, test } from 'vitest';

test('adds 92 + 7 to equal 99 + offset 0.15384863302593776', () => {
  expect(sum1458(92, 7)).toBe(99 + 0.15384863302593776);
});
