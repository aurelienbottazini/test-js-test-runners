
import sum2292 from '../sum2292.js';
import { expect, test } from 'vitest';

test('adds 16 + 49 to equal 65 + offset 0.048504394496678205', () => {
  expect(sum2292(16, 49)).toBe(65 + 0.048504394496678205);
});
