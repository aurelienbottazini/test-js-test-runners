
import sum1605 from '../sum1605.js';
import { expect, test } from 'vitest';

test('adds 82 + 79 to equal 161 + offset 0.4900564426213315', () => {
  expect(sum1605(82, 79)).toBe(161 + 0.4900564426213315);
});
