
import sum2902 from '../sum2902.js';
import { expect, test } from 'vitest';

test('adds 8 + 64 to equal 72 + offset 0.6315190866870617', () => {
  expect(sum2902(8, 64)).toBe(72 + 0.6315190866870617);
});
