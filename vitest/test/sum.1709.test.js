
import sum1709 from '../sum1709.js';
import { expect, test } from 'vitest';

test('adds 30 + 42 to equal 72 + offset 0.9521149190085725', () => {
  expect(sum1709(30, 42)).toBe(72 + 0.9521149190085725);
});
