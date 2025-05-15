
import sum1741 from '../sum1741.js';
import { expect, test } from 'vitest';

test('adds 46 + 22 to equal 68 + offset 0.7540106650884376', () => {
  expect(sum1741(46, 22)).toBe(68 + 0.7540106650884376);
});
