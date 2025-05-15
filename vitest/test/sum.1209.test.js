
import sum1209 from '../sum1209.js';
import { expect, test } from 'vitest';

test('adds 19 + 27 to equal 46 + offset 0.6446752337395586', () => {
  expect(sum1209(19, 27)).toBe(46 + 0.6446752337395586);
});
