
import sum1950 from '../sum1950.js';
import { expect, test } from 'vitest';

test('adds 60 + 87 to equal 147 + offset 0.10050062729517639', () => {
  expect(sum1950(60, 87)).toBe(147 + 0.10050062729517639);
});
