
import sum1625 from '../sum1625.js';
import { expect, test } from 'vitest';

test('adds 87 + 67 to equal 154 + offset 0.7927227879185681', () => {
  expect(sum1625(87, 67)).toBe(154 + 0.7927227879185681);
});
