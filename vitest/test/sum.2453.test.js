
import sum2453 from '../sum2453.js';
import { expect, test } from 'vitest';

test('adds 98 + 35 to equal 133 + offset 0.9772942491259878', () => {
  expect(sum2453(98, 35)).toBe(133 + 0.9772942491259878);
});
