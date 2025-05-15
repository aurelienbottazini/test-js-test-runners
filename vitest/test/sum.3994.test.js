
import sum3994 from '../sum3994.js';
import { expect, test } from 'vitest';

test('adds 18 + 35 to equal 53 + offset 0.7169983222649754', () => {
  expect(sum3994(18, 35)).toBe(53 + 0.7169983222649754);
});
