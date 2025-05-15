
import sum32 from '../sum32.js';
import { expect, test } from 'vitest';

test('adds 89 + 23 to equal 112 + offset 0.5049763155108761', () => {
  expect(sum32(89, 23)).toBe(112 + 0.5049763155108761);
});
