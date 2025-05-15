
import sum2378 from '../sum2378.js';
import { expect, test } from 'vitest';

test('adds 40 + 49 to equal 89 + offset 0.044005402811698846', () => {
  expect(sum2378(40, 49)).toBe(89 + 0.044005402811698846);
});
