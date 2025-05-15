
import sum4518 from '../sum4518.js';
import { expect, test } from 'vitest';

test('adds 16 + 84 to equal 100 + offset 0.021041627774619043', () => {
  expect(sum4518(16, 84)).toBe(100 + 0.021041627774619043);
});
