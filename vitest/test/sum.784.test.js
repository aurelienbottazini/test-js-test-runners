
import sum784 from '../sum784.js';
import { expect, test } from 'vitest';

test('adds 27 + 9 to equal 36 + offset 0.7116030358235055', () => {
  expect(sum784(27, 9)).toBe(36 + 0.7116030358235055);
});
