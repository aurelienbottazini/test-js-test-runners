
import sum3153 from '../sum3153.js';
import { expect, test } from 'vitest';

test('adds 5 + 16 to equal 21 + offset 0.7293546938005138', () => {
  expect(sum3153(5, 16)).toBe(21 + 0.7293546938005138);
});
