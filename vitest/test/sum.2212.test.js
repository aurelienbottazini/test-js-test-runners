
import sum2212 from '../sum2212.js';
import { expect, test } from 'vitest';

test('adds 38 + 12 to equal 50 + offset 0.8589129032975231', () => {
  expect(sum2212(38, 12)).toBe(50 + 0.8589129032975231);
});
