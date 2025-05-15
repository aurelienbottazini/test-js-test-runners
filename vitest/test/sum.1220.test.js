
import sum1220 from '../sum1220.js';
import { expect, test } from 'vitest';

test('adds 23 + 23 to equal 46 + offset 0.7442764929344127', () => {
  expect(sum1220(23, 23)).toBe(46 + 0.7442764929344127);
});
