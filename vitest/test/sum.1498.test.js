
import sum1498 from '../sum1498.js';
import { expect, test } from 'vitest';

test('adds 14 + 91 to equal 105 + offset 0.008801676029484562', () => {
  expect(sum1498(14, 91)).toBe(105 + 0.008801676029484562);
});
