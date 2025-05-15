
import sum2461 from '../sum2461.js';
import { expect, test } from 'vitest';

test('adds 9 + 90 to equal 99 + offset 0.22933957480243183', () => {
  expect(sum2461(9, 90)).toBe(99 + 0.22933957480243183);
});
