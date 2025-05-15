
import sum1776 from '../sum1776.js';
import { expect, test } from 'vitest';

test('adds 6 + 83 to equal 89 + offset 0.5222999171579632', () => {
  expect(sum1776(6, 83)).toBe(89 + 0.5222999171579632);
});
