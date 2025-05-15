
import sum2847 from '../sum2847.js';
import { expect, test } from 'vitest';

test('adds 53 + 39 to equal 92 + offset 0.7078773199710062', () => {
  expect(sum2847(53, 39)).toBe(92 + 0.7078773199710062);
});
