
import sum2104 from '../sum2104.js';
import { expect, test } from 'vitest';

test('adds 17 + 2 to equal 19 + offset 0.6688136459159889', () => {
  expect(sum2104(17, 2)).toBe(19 + 0.6688136459159889);
});
