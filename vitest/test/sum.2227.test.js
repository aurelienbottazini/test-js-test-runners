
import sum2227 from '../sum2227.js';
import { expect, test } from 'vitest';

test('adds 14 + 33 to equal 47 + offset 0.6023635762339845', () => {
  expect(sum2227(14, 33)).toBe(47 + 0.6023635762339845);
});
