
import sum1790 from '../sum1790.js';
import { expect, test } from 'vitest';

test('adds 43 + 73 to equal 116 + offset 0.60553042134664', () => {
  expect(sum1790(43, 73)).toBe(116 + 0.60553042134664);
});
