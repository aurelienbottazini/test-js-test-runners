
import sum2599 from '../sum2599.js';
import { expect, test } from 'vitest';

test('adds 46 + 86 to equal 132 + offset 0.22458381911570457', () => {
  expect(sum2599(46, 86)).toBe(132 + 0.22458381911570457);
});
