
import sum1512 from '../sum1512.js';
import { expect, test } from 'vitest';

test('adds 52 + 63 to equal 115 + offset 0.9202844868962182', () => {
  expect(sum1512(52, 63)).toBe(115 + 0.9202844868962182);
});
