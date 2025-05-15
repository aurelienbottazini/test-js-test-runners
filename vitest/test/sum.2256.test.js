
import sum2256 from '../sum2256.js';
import { expect, test } from 'vitest';

test('adds 93 + 48 to equal 141 + offset 0.12211567663357814', () => {
  expect(sum2256(93, 48)).toBe(141 + 0.12211567663357814);
});
