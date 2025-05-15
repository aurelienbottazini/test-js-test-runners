
import sum2914 from '../sum2914.js';
import { expect, test } from 'vitest';

test('adds 62 + 65 to equal 127 + offset 0.2763299035161382', () => {
  expect(sum2914(62, 65)).toBe(127 + 0.2763299035161382);
});
