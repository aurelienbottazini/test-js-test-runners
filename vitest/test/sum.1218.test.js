
import sum1218 from '../sum1218.js';
import { expect, test } from 'vitest';

test('adds 2 + 56 to equal 58 + offset 0.6890649964165428', () => {
  expect(sum1218(2, 56)).toBe(58 + 0.6890649964165428);
});
