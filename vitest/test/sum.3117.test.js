
import sum3117 from '../sum3117.js';
import { expect, test } from 'vitest';

test('adds 49 + 52 to equal 101 + offset 0.8271872004613274', () => {
  expect(sum3117(49, 52)).toBe(101 + 0.8271872004613274);
});
