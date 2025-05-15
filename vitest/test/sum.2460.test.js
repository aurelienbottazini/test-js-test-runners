
import sum2460 from '../sum2460.js';
import { expect, test } from 'vitest';

test('adds 31 + 63 to equal 94 + offset 0.2718370751276862', () => {
  expect(sum2460(31, 63)).toBe(94 + 0.2718370751276862);
});
