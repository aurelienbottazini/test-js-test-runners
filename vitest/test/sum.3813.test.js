
import sum3813 from '../sum3813.js';
import { expect, test } from 'vitest';

test('adds 18 + 28 to equal 46 + offset 0.06962173737833277', () => {
  expect(sum3813(18, 28)).toBe(46 + 0.06962173737833277);
});
