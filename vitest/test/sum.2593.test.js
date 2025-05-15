
import sum2593 from '../sum2593.js';
import { expect, test } from 'vitest';

test('adds 46 + 64 to equal 110 + offset 0.47612722628803916', () => {
  expect(sum2593(46, 64)).toBe(110 + 0.47612722628803916);
});
