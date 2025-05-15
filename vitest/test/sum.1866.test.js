
import sum1866 from '../sum1866.js';
import { expect, test } from 'vitest';

test('adds 46 + 23 to equal 69 + offset 0.8411565515647925', () => {
  expect(sum1866(46, 23)).toBe(69 + 0.8411565515647925);
});
