
import sum1292 from '../sum1292.js';
import { expect, test } from 'vitest';

test('adds 18 + 61 to equal 79 + offset 0.3811034932483389', () => {
  expect(sum1292(18, 61)).toBe(79 + 0.3811034932483389);
});
