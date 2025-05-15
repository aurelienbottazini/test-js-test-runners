
import sum3775 from '../sum3775.js';
import { expect, test } from 'vitest';

test('adds 46 + 55 to equal 101 + offset 0.7549265889266052', () => {
  expect(sum3775(46, 55)).toBe(101 + 0.7549265889266052);
});
