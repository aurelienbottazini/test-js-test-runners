
import sum1827 from '../sum1827.js';
import { expect, test } from 'vitest';

test('adds 61 + 45 to equal 106 + offset 0.7774709677014103', () => {
  expect(sum1827(61, 45)).toBe(106 + 0.7774709677014103);
});
