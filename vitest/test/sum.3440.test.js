
import sum3440 from '../sum3440.js';
import { expect, test } from 'vitest';

test('adds 43 + 52 to equal 95 + offset 0.6558308978654617', () => {
  expect(sum3440(43, 52)).toBe(95 + 0.6558308978654617);
});
