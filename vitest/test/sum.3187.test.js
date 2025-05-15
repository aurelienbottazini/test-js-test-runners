
import sum3187 from '../sum3187.js';
import { expect, test } from 'vitest';

test('adds 45 + 47 to equal 92 + offset 0.31384198097647253', () => {
  expect(sum3187(45, 47)).toBe(92 + 0.31384198097647253);
});
