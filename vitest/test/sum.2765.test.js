
import sum2765 from '../sum2765.js';
import { expect, test } from 'vitest';

test('adds 32 + 99 to equal 131 + offset 0.018639029646579264', () => {
  expect(sum2765(32, 99)).toBe(131 + 0.018639029646579264);
});
