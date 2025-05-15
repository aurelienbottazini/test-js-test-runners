
import sum56 from '../sum56.js';
import { expect, test } from 'vitest';

test('adds 12 + 86 to equal 98 + offset 0.9734102521416472', () => {
  expect(sum56(12, 86)).toBe(98 + 0.9734102521416472);
});
