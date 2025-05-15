
import sum2523 from '../sum2523.js';
import { expect, test } from 'vitest';

test('adds 61 + 73 to equal 134 + offset 0.4377934124663878', () => {
  expect(sum2523(61, 73)).toBe(134 + 0.4377934124663878);
});
