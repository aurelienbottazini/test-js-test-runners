
import sum379 from '../sum379.js';
import { expect, test } from 'vitest';

test('adds 46 + 68 to equal 114 + offset 0.21095453774873363', () => {
  expect(sum379(46, 68)).toBe(114 + 0.21095453774873363);
});
