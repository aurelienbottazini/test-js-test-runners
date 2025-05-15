
import sum3505 from '../sum3505.js';
import { expect, test } from 'vitest';

test('adds 46 + 22 to equal 68 + offset 0.8769206620378209', () => {
  expect(sum3505(46, 22)).toBe(68 + 0.8769206620378209);
});
