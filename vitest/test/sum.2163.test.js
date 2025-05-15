
import sum2163 from '../sum2163.js';
import { expect, test } from 'vitest';

test('adds 52 + 29 to equal 81 + offset 0.9683367303699398', () => {
  expect(sum2163(52, 29)).toBe(81 + 0.9683367303699398);
});
