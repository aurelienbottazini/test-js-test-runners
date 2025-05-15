
import sum3432 from '../sum3432.js';
import { expect, test } from 'vitest';

test('adds 73 + 39 to equal 112 + offset 0.9320037619566613', () => {
  expect(sum3432(73, 39)).toBe(112 + 0.9320037619566613);
});
