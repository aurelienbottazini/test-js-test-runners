
import sum1561 from '../sum1561.js';
import { expect, test } from 'vitest';

test('adds 90 + 30 to equal 120 + offset 0.9921893275248354', () => {
  expect(sum1561(90, 30)).toBe(120 + 0.9921893275248354);
});
