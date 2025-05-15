
import sum3587 from '../sum3587.js';
import { expect, test } from 'vitest';

test('adds 3 + 43 to equal 46 + offset 0.9860890528917408', () => {
  expect(sum3587(3, 43)).toBe(46 + 0.9860890528917408);
});
