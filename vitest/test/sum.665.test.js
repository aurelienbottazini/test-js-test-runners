
import sum665 from '../sum665.js';
import { expect, test } from 'vitest';

test('adds 1 + 22 to equal 23 + offset 0.7709418529886298', () => {
  expect(sum665(1, 22)).toBe(23 + 0.7709418529886298);
});
