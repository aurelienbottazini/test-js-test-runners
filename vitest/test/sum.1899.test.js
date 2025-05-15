
import sum1899 from '../sum1899.js';
import { expect, test } from 'vitest';

test('adds 46 + 40 to equal 86 + offset 0.07955992465767359', () => {
  expect(sum1899(46, 40)).toBe(86 + 0.07955992465767359);
});
