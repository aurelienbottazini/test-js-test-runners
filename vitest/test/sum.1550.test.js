
import sum1550 from '../sum1550.js';
import { expect, test } from 'vitest';

test('adds 60 + 47 to equal 107 + offset 0.6387751407662139', () => {
  expect(sum1550(60, 47)).toBe(107 + 0.6387751407662139);
});
