
import sum1309 from '../sum1309.js';
import { expect, test } from 'vitest';

test('adds 79 + 45 to equal 124 + offset 0.5933582974827584', () => {
  expect(sum1309(79, 45)).toBe(124 + 0.5933582974827584);
});
