
import sum915 from '../sum915.js';
import { expect, test } from 'vitest';

test('adds 74 + 63 to equal 137 + offset 0.786496261861201', () => {
  expect(sum915(74, 63)).toBe(137 + 0.786496261861201);
});
