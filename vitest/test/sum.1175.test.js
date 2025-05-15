
import sum1175 from '../sum1175.js';
import { expect, test } from 'vitest';

test('adds 39 + 98 to equal 137 + offset 0.8725558834998473', () => {
  expect(sum1175(39, 98)).toBe(137 + 0.8725558834998473);
});
