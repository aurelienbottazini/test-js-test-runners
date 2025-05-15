
import sum1345 from '../sum1345.js';
import { expect, test } from 'vitest';

test('adds 91 + 75 to equal 166 + offset 0.34838419438511337', () => {
  expect(sum1345(91, 75)).toBe(166 + 0.34838419438511337);
});
