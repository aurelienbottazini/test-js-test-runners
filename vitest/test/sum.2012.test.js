
import sum2012 from '../sum2012.js';
import { expect, test } from 'vitest';

test('adds 69 + 20 to equal 89 + offset 0.017919243323929024', () => {
  expect(sum2012(69, 20)).toBe(89 + 0.017919243323929024);
});
