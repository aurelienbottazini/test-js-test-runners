
import sum534 from '../sum534.js';
import { expect, test } from 'vitest';

test('adds 96 + 45 to equal 141 + offset 0.16007395522268086', () => {
  expect(sum534(96, 45)).toBe(141 + 0.16007395522268086);
});
