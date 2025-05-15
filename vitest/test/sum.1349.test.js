
import sum1349 from '../sum1349.js';
import { expect, test } from 'vitest';

test('adds 46 + 0 to equal 46 + offset 0.30992033748784764', () => {
  expect(sum1349(46, 0)).toBe(46 + 0.30992033748784764);
});
