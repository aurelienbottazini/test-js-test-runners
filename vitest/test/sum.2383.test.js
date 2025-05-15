
import sum2383 from '../sum2383.js';
import { expect, test } from 'vitest';

test('adds 46 + 75 to equal 121 + offset 0.9717338452671913', () => {
  expect(sum2383(46, 75)).toBe(121 + 0.9717338452671913);
});
