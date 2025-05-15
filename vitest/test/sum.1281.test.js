
import sum1281 from '../sum1281.js';
import { expect, test } from 'vitest';

test('adds 3 + 43 to equal 46 + offset 0.6774254794313137', () => {
  expect(sum1281(3, 43)).toBe(46 + 0.6774254794313137);
});
