
import sum1022 from '../sum1022.js';
import { expect, test } from 'vitest';

test('adds 46 + 35 to equal 81 + offset 0.4621403638227657', () => {
  expect(sum1022(46, 35)).toBe(81 + 0.4621403638227657);
});
