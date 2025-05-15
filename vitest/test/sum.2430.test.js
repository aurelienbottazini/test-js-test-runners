
import sum2430 from '../sum2430.js';
import { expect, test } from 'vitest';

test('adds 96 + 46 to equal 142 + offset 0.530086520769782', () => {
  expect(sum2430(96, 46)).toBe(142 + 0.530086520769782);
});
