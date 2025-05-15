
import sum1898 from '../sum1898.js';
import { expect, test } from 'vitest';

test('adds 76 + 22 to equal 98 + offset 0.19719681848853943', () => {
  expect(sum1898(76, 22)).toBe(98 + 0.19719681848853943);
});
