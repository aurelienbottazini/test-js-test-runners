
import sum1122 from '../sum1122.js';
import { expect, test } from 'vitest';

test('adds 34 + 3 to equal 37 + offset 0.8578781481497868', () => {
  expect(sum1122(34, 3)).toBe(37 + 0.8578781481497868);
});
