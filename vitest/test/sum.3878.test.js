
import sum3878 from '../sum3878.js';
import { expect, test } from 'vitest';

test('adds 46 + 53 to equal 99 + offset 0.795066023400053', () => {
  expect(sum3878(46, 53)).toBe(99 + 0.795066023400053);
});
