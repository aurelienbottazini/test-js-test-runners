
import sum3652 from '../sum3652.js';
import { expect, test } from 'vitest';

test('adds 12 + 34 to equal 46 + offset 0.12247161968284459', () => {
  expect(sum3652(12, 34)).toBe(46 + 0.12247161968284459);
});
