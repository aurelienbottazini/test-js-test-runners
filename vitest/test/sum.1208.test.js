
import sum1208 from '../sum1208.js';
import { expect, test } from 'vitest';

test('adds 23 + 79 to equal 102 + offset 0.5620636341190494', () => {
  expect(sum1208(23, 79)).toBe(102 + 0.5620636341190494);
});
