
import sum345 from '../sum345.js';
import { expect, test } from 'vitest';

test('adds 63 + 83 to equal 146 + offset 0.8024979497950988', () => {
  expect(sum345(63, 83)).toBe(146 + 0.8024979497950988);
});
