
import sum2670 from '../sum2670.js';
import { expect, test } from 'vitest';

test('adds 72 + 29 to equal 101 + offset 0.8499847848369628', () => {
  expect(sum2670(72, 29)).toBe(101 + 0.8499847848369628);
});
