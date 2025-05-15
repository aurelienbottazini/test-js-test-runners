
import sum2241 from '../sum2241.js';
import { expect, test } from 'vitest';

test('adds 56 + 63 to equal 119 + offset 0.6460517145097108', () => {
  expect(sum2241(56, 63)).toBe(119 + 0.6460517145097108);
});
